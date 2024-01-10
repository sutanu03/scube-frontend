// ProdDrop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProdDrop = ({ onChange }) => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8088/api/product/read/all')
      .then(response => setProduct(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = (e) => {
    const selectedProductCode = e.target.value;
    onChange(selectedProductCode); // Pass the selected product code
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        {product.map(product => (
          <option value={product.a_prod_code} key={product.a_prod_code}>
            {product.a_prod_code} -- {product.b_prod_name}
          </option>
        ))}
      </select>
    </>
  );
};

export default ProdDrop;
