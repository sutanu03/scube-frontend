"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Product = () => {

  const [formData, setFormData] = useState({
    prod_code: '',
    b_prod_name: '',
    c_description: '',
    d_unit_price: '',
    e_category: '',
  });

  const handleChanges = (e, name) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   // call after submit the form
   const handleSubmits = async (e) => {
    e.preventDefault();

    // Continue with form submission
    console.log('Form submitted:', formData);
    saveFormDataToDatabase(formData);
  };

  // method/funtion to save formData into database using api 

  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/product/add';

    axios.post(apiEndpoint, data)
      .then(response => {
        console.log('Form data saved successfully:', response.data);
        resetFormData();
      //  reset();
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  };

  function resetFormData() {
    window.location.reload(false);
    alert("Product added!");
  }

  return (
    <div>
    <div className="flex w-full text-center justify-around align-middle pt-20 items-center">
      <div className="w-2/6">
      <img
          src="https://i.pinimg.com/originals/23/e7/e2/23e7e2b90047a58710e5c13ba53494f1.gif"
          alt="seller"
        />
      </div>
      <form onSubmit={handleSubmits}>
      <div className="align-middle items-center justify-center">
      <div className="text-blue-800 text-3xl text-center font-bold p-2">Add New Product</div>
          <div className="flex justify-center p-2 gap-4">
            <input
              type="text"
              className='w-100'
              name="prod_code"
              value={formData.prod_code}
            onChange={(e) => handleChanges(e, 'prod_code')}
              placeholder="Product Code"
              required
            />

            <input
              type="text"
              className='w-100'
              name="b_prod_name"
              value={formData.b_prod_name}
            onChange={(e) => handleChanges(e, 'b_prod_name')}
              placeholder="Product Name"
              required
            />
          </div>

          <div className="flex justify-center p-2 gap-4">
            <input
              type="text"
              className='w-100'
              name="c_description"
              value={formData.c_description}
            onChange={(e) => handleChanges(e, 'c_description')}
              placeholder="Description"
            />

            <input
              type="number"
              className='w-100'
              min="1"
              name="d_unit_price"
              value={formData.d_unit_price}
            onChange={(e) => handleChanges(e, 'd_unit_price')}
              placeholder="Per Unit Price(in number)"
              required
            />
          </div>

          <div className="flex justify-center p-2 gap-4">
            <input
            className='w-100'
              type="text"
              name="e_category"
              value={formData.e_category}
            onChange={(e) => handleChanges(e, 'e_category')}
              placeholder="Product Category"
            />
          </div>
        </div>
        <div className="flex text-center align-center justify-end fixed-bottom">
          <button className="bttn" onClick={resetPage}>
            Cancel
          </button>
          <button id="quotationEntryButton" className="bttn" type="submit">
            Save
          </button>
        </div>
      </form>

    </div>
    </div>
  )
}

// refresh page after cancel button to clear everything in the  form
const resetPage = (e) => {
  //alert('Form submission canceled');
  window.location.reload(false);
};

export default Product
