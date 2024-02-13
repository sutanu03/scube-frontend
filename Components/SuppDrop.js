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
   
    const supp_code = e.target.value;
    if (supp_code === "") {
      alert("Please select a Supplier.");
    } else {
      onChange({supp_code : supp_code }); // Pass object with prod_code key
    }
  };

  return (
    <>
      <select onChange={handleSelectChange}>
        {supplier.map(supplier => (
          <option value={supplier.supp_code} key={supplier.supp_code}>
            {supplier.supp_code} -- {supplier.b_supp_name}
          </option>
        ))}
      </select>
    </>
  );
};


export default SuppDrop;
