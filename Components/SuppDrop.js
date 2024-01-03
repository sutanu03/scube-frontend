import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SuppDrop = ({ onChange }) => {

  const [supplier, setSupplier] = useState([]);

  useEffect(function(){
    axios.get('http://localhost:8088/api/supplier/read/all')
    .then(response => setSupplier(response.data))
    .then(error => console.log(error))
  }, [])

  return (
    <>
    <select onChange={(e) => onChange(e)}>
      <option value="0">Select</option>
      {
        supplier.map(supplier => 
          <option value={supplier.id} key={supplier.a_supplierCode}>{supplier.a_supplierCode}</option>
          )
      }
    </select>
    </>
  );
};

export default SuppDrop;
