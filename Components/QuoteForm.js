// QuoteForm.js
import React, { useState } from 'react';
import DynamicDropdown from '@/Components/DynamicDropdown';


const QuoteForm = () => {

  const [selectedDropdownValue, setSelectedDropdownValue] = useState([]);

  const [formData, setFormData] = useState({
    quoteNo: '',
    currentDate: new Date().toISOString().slice(0, 10),
    manualDate: '',
    suppName: '',
    phoneNumber: '',
  });

  const reset = (e) => {
    //alert('Form submission canceled');
    window.location.reload(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDropdownChange = (value) => {
    setSelectedDropdownValue(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare the data to be sent to the API
    const formDataToSave = {
      quoteNo: formData.quoteNo,
      currentDate: new Date().toISOString().slice(0, 10),
      manualDate: formData.manualDate,
      suppName: formData.suppName,
      phoneNumber: formData.phoneNumber,
      selectedDropdownValue: selectedDropdownValue,
    };

    try {
      // Replace 'https://api-endpoint' with the actual endpoint URL
      const response = await fetch('http://localhost:8088/api/quote/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSave),
      });

      if (response.ok) {
        // Handle success
        console.log('Data saved successfully!');
      } else {
        // Handle errors
        console.error('Failed to save data:', response.statusText);
      }
    } catch (error) {
      console.error('Error sending request:', error);
    }
  };

  return (
    <div>
    <div className="header-text2 text-center">Quotation</div>
    <form onSubmit={handleSubmit}>

      <div className="master-data d-flex my-2 justify-between">

      <div className="data-1">
    <label className="align-middle">Quote Number:</label>
    <input type="text" name="quoteNo" placeholder="ex: Quote-001" value={formData.quoteNo} onChange={handleChange} />
  </div>

  <div className="data-1 d-flex">
<label>Quotation Date:</label>
<input type="date" name="manualDate" value={formData.manualDate} onChange={handleChange} />
</div>

<div className="data-1">
          <label>Submission Date:</label>
          <input type="text" name="currentDate" value={formData.currentDate} readOnly />
        </div>
        </div> 

        <div className="master-data d-flex my-2 justify-between">
        <div className="data-1 d-flex">
          <label>Select Supplier:</label>
          <DynamicDropdown
            apiEndpoint="http://localhost:8088/api/user/read/csesutanu@gmail.com"
            onSelect={handleDropdownChange}
          />
        </div>

  <div className="data-1">
<label>Supplier Name:</label>
<input type="text" name="suppName" placeholder="ex: ITC-01-001" value={formData.suppName} onChange={handleChange} />

  </div>
  <div className="data-1">
<label>Phone Number: </label>
<input type="tel" name="phoneNumber" placeholder="ex: 9432XXXX00" value={formData.phoneNumber} onChange={handleChange} />

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
  <th scope="col">Misc Cost</th>
  <th scope="col">Quantity</th>
  <th scope="col">Price</th>
  <th scope="col">Discount(%)</th>
  <th scope="col">Final Price</th>
  
</tr>
</thead>
    <tbody>
      <tr>

        <td scope="row">
           <DynamicDropdown apiEndpoint="http://localhost:8088/api/user/read/csesutanu@gmail.com" onSelect={handleDropdownChange} />
        </td>
  <td className="text-center align-middle" id="description">
    <input className="select-input"
          type="text"
          name="g_description"
          placeholder="write about quotation(within 250 letters)"
          required
        />
  </td>
  <td className="text-center align-middle">
    <input className="select-input" type="number" name="h_rate" placeholder="ex: 499" required />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
    type="number"
    name="j_misc"
    placeholder="Any extra"
    required
  />
  </td>
  <td className="text-center align-middle">
    <input className="select-input" type="number" name="i_qnty" placeholder="ex: 10" required />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="k_price"
          placeholder="ex: 499"
          required
        />
  </td>
  
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="l_discount"
          placeholder="ex: 5"
          required
        />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="m_finalAmount"
          placeholder="ex: 1299"
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

export default QuoteForm;
