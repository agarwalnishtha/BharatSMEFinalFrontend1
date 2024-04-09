// ProductList.js
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import products from './khakhra_machine_data';

const KhakhraMachineList = () => {
    console.log(products);
  return (
    <div>
    <h1 style={{textAlign: 'center', fontWeight: 'bolder'}}>Khakhra, Bhakhri,Thepla & Roti</h1>
    <h1 style={{textAlign: 'center', fontWeight: 'bolder'}}>Making Machines</h1>
    <br></br>
    <div style={{cursor: 'pointer'}}>
      {products.map((product, index) => (
        <div key={index} className="product-container" style={{marginBottom:'50px'}}>
        <Link to={`/khakhra-machines/${index}`}>
          <img src={product.coverImage} alt={product.name} style={{maxWidth: '600px', height: '300px'}}/>
          </Link>
          {/* <img src={product.detailImage} alt={product.name} style={{maxWidth: '600px', height: '300px'}}/> */}
          <p style={{fontWeight: 'bolder', fontSize: 'large'}}>{product.name}</p>
          <span style={{ marginRight: '35px' }}>{product.price}</span>
          <span>
          <PhoneIcon /> <a href="tel:product.contact" className='phone-link' style={{color: 'black', textDecoration: 'none', color: 'gray'}}>{product.contact}</a> </span>
         
        </div>
        
      ))}
      {/* {selectedProduct && <KhakhraMachineDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />} */}
    </div>
    </div>
  );
};

export default KhakhraMachineList;
