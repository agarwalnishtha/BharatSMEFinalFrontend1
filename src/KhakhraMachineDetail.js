// KhakhraMachineDetail.js

import React from 'react';
import { useParams } from 'react-router-dom';
import products from './khakhra_machine_data';

const KhakhraMachineDetail = () => {
    const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));
  console.log(product);

  if (!product) {
    return <div>Product not found</div>;; // Return null or handle the case when product is undefined
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <img src={product.detailImage} alt={product.name} />
      {/* Render other product details */}
    </div>
  );
};

export default KhakhraMachineDetail;



