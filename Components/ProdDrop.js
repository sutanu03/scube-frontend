// ProductDrop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuppDrop = ({ onChange }) => {

  // state to save the value of Selected product
  
  const [product, setProduct] = useState([]);

  // getting Product.a_product_Code from database using axios

  useEffect(() => {
    axios.get('http://localhost:8088/api/product/read/all')
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = (e) => {
    const selectedProductCode = e.target.value;
    onChange(selectedProductCode);
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        {product.map(product => (
          <option value={product.a_prod_code} key={product.a_prod_code}>
            {product.a_prod_code}
          </option>
        ))}
      </select>
    </>
  );
};

export default SuppDrop;
