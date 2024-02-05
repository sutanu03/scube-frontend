// SuppDrop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuppDrop = ({ onChange }) => {

  // state to save the value of Selected supplier
  
  const [supplier, setSupplier] = useState([]);

  // getting Supplier.a_supplierCode from database using axios

  useEffect(() => {
    axios.get('http://localhost:8088/api/supplier/read/all')
      .then(response => setSupplier(response.data))
      .catch(error => console.log(error));
  }, []);

  const handleSelectChange = (e) => {
    const selectedSupplierCode = e.target.value;
    onChange(selectedSupplierCode);
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        {supplier.map(supplier => (
          <option value={supplier.supp_code} key={supplier.supp_code}>
            {supplier.supp_code}
          </option>
        ))}
      </select>
    </>
  );
};

export default SuppDrop;
