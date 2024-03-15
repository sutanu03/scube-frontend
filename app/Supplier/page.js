"use client"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Supplier = () => {
  const [formData, setFormData] = useState({
    supp_code: '',
    b_supp_name: '',
    c_address: '',
    d_contact_number: '',
    e_contact_person: '',
    f_designation: '',
    g_mobile_no: '',
    h_gst_number: '',
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

   // call after submit the form
   const handleSubmit = async (e) => {
    e.preventDefault();

    // Continue with form submission
    console.log('Form submitted:', formData);
    saveFormDataToDatabase(formData);
  };

  // method/funtion to save formData into database using api 

  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/supplier/add';

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
    alert("Supplier added!");
  }

  return (
    <div>
    <div className="flex w-full text-center justify-around align-middle p-2 items-center">
      <div className="w-auto">
        <img
          src="https://www.iwebscraping.com/images/Retail-&-Distribution-Chain-Monitoring1.gif"
          alt="seller"
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className="align-middle items-center justify-center">
        <div className="text-blue-800 text-3xl text-center font-bold p-2">Add New Supplier</div>
          <div className="flex justify-center p-2 gap-4">
            <input
              type="text"
              className='w-100'
              placeholder="Supplier Code"
              name="supp_code"
              value={formData.supp_code}
            onChange={(e) => handleChange(e, 'supp_code')}
              required
            />

            <input
              type="text"
              name="b_supp_name"
              value={formData.b_supp_name}
            onChange={(e) => handleChange(e, 'b_supp_name')}
              className='w-100'
              placeholder="Supplier Name"
              required
            />
          </div>

          <div className="flex justify-center p-2 gap-4">
            <input
              type="text"
              name="c_address"
              value={formData.c_address}
            onChange={(e) => handleChange(e, 'c_address')}
              className='w-100'
              placeholder="Address"
            />

            <input
              type="number"
              name="d_contact_number"
              value={formData.d_contact_number}
            onChange={(e) => handleChange(e, 'd_contact_number')}
              className='w-100'
              placeholder="Contact Number(ex: landline)"
              required
            />
          </div>

          <div className="flex justify-center p-2 gap-4">
            <input
              type="text"
              name="e_contact_person"
              value={formData.e_contact_person}
            onChange={(e) => handleChange(e, 'e_contact_person')}
              className='w-100'
              placeholder="Contact Person(ex: Mr. Adam)"
            />

            <input
              type="text"
              name="f_designation"
              value={formData.f_designation}
            onChange={(e) => handleChange(e, 'f_designation')}
              className='w-100'
              placeholder="Designation(ex: Manager)"
            />
          </div>

          <div className="flex justify-center p-2 gap-4">
            <input
              type="number"
              name="g_mobile_no"
              value={formData.g_mobile_no}
            onChange={(e) => handleChange(e, 'g_mobile_no')}
              className='w-100'
              placeholder="Phone Number"
            />

            <input
              type="text"
              name="h_gst_number"
              value={formData.h_gst_number}
            onChange={(e) => handleChange(e, 'h_gst_number')}
              className='w-100'
              placeholder="GST Number"
              required
            />
          </div>
          </div>

          <br />
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

export default Supplier
