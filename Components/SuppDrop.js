// SuppDrop.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuppDrop = ({ onChange }) => {
  const [supplier, setSupplier] = useState([]);

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
        <option value="0">Select</option>
        {supplier.map(supplier => (
          <option value={supplier.a_supplierCode} key={supplier.a_supplierCode}>
            {supplier.a_supplierCode}
          </option>
        ))}
      </select>
    </>
  );
};

export default SuppDrop;
