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
    console.log(selectedProductCode)
    if (selectedProductCode === "") {
      alert("Please select a product.");
    } else {
      onChange({ prod_code: selectedProductCode }); // Pass object with prod_code key
    }
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        <option value="">Select Product</option> {/* Default option */}
        {product.map(product => (
          <option value={product.prod_code} key={product.prod_code}>
            {product.prod_code} -- {product.b_prod_name} -- {product.c_description}
          </option>
        ))}
      </select>
    </>
  );
};


export default ProdDrop;
