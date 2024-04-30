// KhakhraMachineDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import cooling_machines from './cooling_machine_data';
import PhoneIcon from '@mui/icons-material/Phone';

const CoolingMachineDetail = () => {
    const { coolingId } = useParams();
    const product = cooling_machines.find((product) => product.id === parseInt(coolingId));
    console.log(product);

    if (!product) {
        return <div>Product not found</div>; // Return null or handle the case when product is undefined
    }

    return (
        <div style={{ textAlign: 'center' }}>
            <h2>{product.name}</h2>
            <img src={product.detailImage} alt={product.name} />
            <div>
                <span style={{ marginRight: '35px' }}>{product.price}</span>
                <span>
                    <PhoneIcon /> <a href="tel:product.contact" className='phone-link' style={{ color: 'black', textDecoration: 'none', color: 'gray' }}>{product.contact}</a> </span>
            </div>
            {/* Render other product details */}
        </div>
    );
};

export default CoolingMachineDetail;



