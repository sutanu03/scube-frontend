// TableRow.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddDeleteTableRows from './AddDeleteTableRows';

const TableRow = () => {

      const handleChange = (e, name, name2) => {
        const value = e.target.value;
        const value2 = e.target.value2;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
          [name2]: value2,
        }));
      };

      // call after submit the form
  const handleSubmit2 = async (e) => {
    e.preventDefault();

    // Continue with form submission
    console.log('Detail submitted:', formData);
    saveFormDataToDatabase(formData);
  };

  // method/funtion to save formData into database using api 

  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/quote/details/add';

    axios.post(apiEndpoint, data)
      .then(response => {
        console.log('Form2 data saved successfully:', response.data);
        resetFormData();
      //  reset();
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  };

  function resetFormData() {
    window.location.reload(false);
    console.log("Quotation D created!");
  }

  function addNewRow() {
    
  }

  return (
    <div></div>
  )
}

export default TableRow;