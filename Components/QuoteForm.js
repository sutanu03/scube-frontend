// QuoteForm.js
import React, { useState } from 'react';
import SuppDrop from '@/Components/SuppDrop';
import axios from 'axios';

const QuoteForm = ({ onChange }) => {
  const [formData, setFormData] = useState({
    a_quotation_number: '',
    b_date: '',
    c_supplierCode: '',
    d_suppName: '',
    e_submission_dateo: getCurrentDate(),
    f_productCode: '',
    g_description: '',
    h_rate: '',
    i_qnty: '',
    j_misc: '',
    k_price: '',
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    saveFormDataToDatabase(formData);
  };

  
  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/quote/add';

    axios.post(apiEndpoint, data)
      .then(response => {
        console.log('Form data saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="master-data d-flex my-2 justify-between">

      <div className="data-1">
    <label className="align-middle">Quote Number:</label>
   
    <input
                    type="text"
                    name="a_quotation_number"
                    placeholder='ex: Quote-01-001'
                    value={formData.a_quotation_number}
                    onChange={(e) => handleChange(e, 'a_quotation_number')}
                    required
                />
  </div>

  <div className="data-1 d-flex">
<label>Quotation Date:</label>
<input type="date" name="b_date" value={formData.b_date} onChange={(e) => handleChange(e, 'b_date')} required/>
</div>

<div className="data-1">
          <label htmlFor="e_submission_dateo">Submission Date:</label>
          <input
        type="text"
        id="e_submission_dateo"
        name="e_submission_dateo"
        value={formData.e_submission_dateo}
        onChange={(e) => handleChange(e, 'e_submission_dateo')}
        readOnly // Make the current date input read-only
        required
      />
        </div>
        </div> 

  <div className="master-data d-flex my-2 justify-between">
    <div className="data-1 d-flex">
          <label>Supplier Code:</label>
          <SuppDrop onChange={(value) => handleChange({ target: { value } }, 'c_supplierCode')} />
        </div>

        <div className="data-1">
<label>Supplier Name:</label>
<input
                    type="text"
                    name="d_suppName"
                    placeholder="ex: ITC-01-001"
                    value={formData.d_suppName}
                    onChange={(e) => handleChange(e, 'd_suppName')}
                    required
                />
  </div>
  </div>



<hr/>

<div className="header-text2 text-center">Details</div>

<div className="table-div p-2">
  <table className="table table-bordered" id="myTable">
  <thead>
<tr className="table-active">
  <th scope="col">Item Code</th>
  <th scope="col">Description</th>
  <th scope="col">Rate</th>
  <th scope="col">Quantity</th>
  <th scope="col">Misc Cost</th>
  <th scope="col">Price</th>
  
</tr>
</thead>
    <tbody>
      <tr>

      <td scope="row">
        {/*
                <DynamicDropdown
                  apiEndpoint="http://localhost:8088/api/user/read/csesutanu@gmail.com"
                  onSelect={(value) => handleDropdownChange(value, 'itemCode')}
                />


                 <SuppDrop onChange={(e) => handleChange(e, 'c_supplierCode')} />
                
                 */}
         
                <input
                    className="select-input"
                    type="text"
                    name="f_productCode"
                    placeholder="ex: Prod-001"
                    value={formData.f_productCode}
                    onChange={(e) => handleChange(e, 'f_productCode')}
                    required
                />  
         

             </td>
  <td className="text-center align-middle" id="description">
        <input
                    className="select-input"
                    type="text"
                    name="g_description"
                    placeholder="write about quotation(within 250 letters)"
                    value={formData.g_description}
                    onChange={(e) => handleChange(e, 'g_description')}
                    required
                />
  </td>
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="text"
                    name="h_rate"
                    placeholder="ex: 499"
                    value={formData.h_rate}
                    onChange={(e) => handleChange(e, 'h_rate')}
                    required
                />
  </td>
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="text"
                    name="i_qnty"
                    placeholder="ex: 10"
                    value={formData.i_qnty}
                    onChange={(e) => handleChange(e, 'i_qnty')}
                    required
                />
  </td>
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="text"
                    name="j_misc"
                    placeholder="Any extra"
                    value={formData.j_misc}
                    onChange={(e) => handleChange(e, 'j_misc')}
                    required
                />
  </td>
  
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="text"
                    name="k_price"
                    placeholder="ex: 499"
                    value={formData.k_price}
                    onChange={(e) => handleChange(e, 'k_price')}
                    required
                />
  </td>
  </tr>
            </tbody>
          </table>

</div>
<div className="flex text-center align-center justify-center">
          <button className="bttn" onClick={reset}>
            Cancel
          </button>
          <button id="quotationEntryButton" className="bttn" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

// Function to get the current date in "YYYY-MM-DD" format
const getCurrentDate = () => {
  const today = new Date();
  const year = today.getFullYear();
  let month = today.getMonth() + 1;
  let day = today.getDate();

  // Add leading zero to month and day if needed
  month = month < 10 ? `0${month}` : month;
  day = day < 10 ? `0${day}` : day;

  return `${year}-${month}-${day}`;
};

const reset = (e) => {
  //alert('Form submission canceled');
  window.location.reload(false);
};

export default QuoteForm;