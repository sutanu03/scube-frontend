import React, { useState, useEffect } from 'react';
import axios from 'axios'; 

function ProductDropDown({ onDropdownData }) {
    const [product, setProduct] = useState([]);

  useEffect(() => {
    // Fetch dropdown data from API
    axios.get('http://localhost:8088/api/product/read/all')
      .then(response => {
        setProduct(response.data); // Assuming response.data is an array of options
      })
      .catch(error => {
        console.error('Error fetching dropdown data:', error);
      });
  }, []);

  // Function to handle dropdown changes in the child component
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    // Call the function passed from the parent with the selected value
    onDropdownData(selectedValue);
  };

  return (
    <div>
      <h2>Child Component</h2>
      <select onChange={handleChange}>
      {product.map(product => (
          <option value={product.prod_code} key={product.prod_code}>
            {product.prod_code}
          </option>
        ))}
      </select>
    </div>
  );
}

export default ProductDropDown;
