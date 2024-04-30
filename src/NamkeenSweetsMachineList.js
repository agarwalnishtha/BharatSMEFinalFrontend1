// ProductList.js
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import namkeen_sweet_machines from './namkeen_sweets_machines_data';

const NamkeenSweetsMachineList = () => {
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Oil Machines</h1>
            <br></br>
            <div style={{ cursor: 'pointer' }}>
                {namkeen_sweet_machines.map((product, index) => (
                    <div key={index} className="product-container">
                        <Link to={`/namkeen-sweets-machines/${index}`}>
                            <img src={product.coverImage} alt={product.name} style={{ maxWidth: '600px', height: '300px' }} />
                        </Link>
                        <p style={{ fontWeight: 'bolder', fontSize: 'large' }}>{product.name}</p>
                        <span style={{ marginRight: '35px' }}>{product.price}</span>
                        <span>
                            <PhoneIcon /> <a href="tel:product.contact" className='phone-link' style={{ color: 'black', textDecoration: 'none', color: 'gray' }}>{product.contact}</a> </span>

                    </div>

                ))}
                {/* {selectedProduct && <KhakhraMachineDetail product={selectedProduct} onClose={() => setSelectedProduct(null)} />} */}
            </div>
        </div>
    );
};

export default NamkeenSweetsMachineList;
