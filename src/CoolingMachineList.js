// ProductList.js
import React, { useState } from 'react';
import PhoneIcon from '@mui/icons-material/Phone';
import { Link } from 'react-router-dom';
import cooling_machines from './cooling_machine_data';

const CoolingMachineList = () => {
    console.log(cooling_machines);
    return (
        <div>
            <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Cooling Machines</h1>
            {/* <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>Making Machines</h1> */}
            <br></br>
            <div style={{ cursor: 'pointer' }}>
                {cooling_machines.map((product, index) => (
                    <div key={index} className="product-container">
                        <Link to={`/cooling-machines/${index}`}>
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

export default CoolingMachineList;
