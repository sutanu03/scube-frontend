// QuoteForm.js
import React, { useState, useEffect } from 'react';
import ProdDrop from '@/Components/ProdDrop'
import SuppDrop from '@/Components/SuppDrop';
import axios from 'axios';
import AddDeleteTableRows from '@/Components/AddRemoveMultipleInputFields';
import TableRow from '@/Components/TableRow';
import Detail from '@/app/Quotation/Detail';

const QuoteForm = ({ onChange }) => {

  const [quoteNum, setQuoteNum] = useState("");

  // problem for saving quote number after every detail submission ==> if after submitting some detail, any problem occurs, then the quotation number should be changed
  // but for that details, the quote number will be unchnaged
  // thats why we have save the quotation first, then add details within it

  // unique quotation number 

  // saving data from input to Master formData
  const [formData, setFormData] = useState({
    quotation_number: quoteNum,
    q_date: '',
    supp_code: 'TCS-01-001',
    submission_date: getCurrentDate()
  });

  const [formData2, setFormData2] = useState({
      quotation_number: quoteNum,
      prod_code: 'Prod-002',
      rate: '100',
      qnty: '10',
      misc: '0',
      price: '1000'
  });

  // state to check if the quotation number exists
  const [isQuotationNumberExists, setIsQuotationNumberExists] = useState(false);

  useEffect(() => {
    // Check quotation number existence when formData.quotation_number changes
    checkQuotationNumberExists();
  }, [formData.quotation_number]);

  const handleChange = (e, name) => {
    const value = e.target.value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setFormData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const checkQuotationNumberExists = async () => {
    try {
      const response = await axios.post('http://localhost:8088/api/quote/checkQuotationNumber', {
        quotationNumber: formData.quotation_number,
      });

      setIsQuotationNumberExists(response.data.exists);
    } catch (error) {
      console.error('Error checking quotation number:', error);
    }
  };


  // call after submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if quotation number already exists before submitting
    if (isQuotationNumberExists) {
      // Show a message or take appropriate action
      alert('Quotation number already exists. Please choose a different one.');
      return;
    }

    // Continue with form submission
    console.log('Form submitted:', formData);
    //console.log(formData2);
   // saveFormDataToDatabase(formData);  
   // saveFormDataToDatabase2(formData2);
  };


  // method/funtion to save formData into database using api 

  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/quote/add';

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

  const saveFormDataToDatabase2 = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/quote/details/add';

    axios.post(apiEndpoint, data)
      .then(response => {
        console.log('Detail saved successfully:', response.data);
        resetFormData();
      //  reset();
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  };

  function resetFormData() {
    window.location.reload(false);
    alert("Quotation created!");
  }
  

//, textAlign: 'right', paddingRight: '20px' 
  
return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="master-data d-flex m-2 justify-between text-justify p-2">

      <div className="data-1 flex w-1/4 align-middle">
      <label>Quote Number:</label>
          <div className='text-center'>
          
          <input
            type="text"
            name="quotation_number"
            placeholder='pattern: Quote-00?'
            value={formData.quotation_number}
            onChange={(e) => handleChange(e, 'quotation_number')}
            required
          />
          {isQuotationNumberExists && <div style={{ color: 'red'}}>Quotation number already exists!</div>}
          </div>
        </div>

  <div className="data-1 d-flex w-1/4">
<label>Quotation Date:</label>
<input type="date" name="b_date" value={formData.q_date} onChange={(e) => handleChange(e, 'q_date')} max={new Date().toISOString().split('T')[0]} required/>
</div>

    <div className="data-1 d-flex w-1/4">
          <label htmlFor="submission_date">Submission Date:</label>
          <input
        type="text"
        id="submission_date"
        name="submission_date"
        className='outline-none border-transparent focus:border-transparent focus:ring-0 w-1/3'
        value={formData.submission_date}
        onChange={(e) => handleChange(e, 'submission_date')}
        readOnly // Make the current date input read-only
        required
      />
    </div>

        <div className="data-1 d-flex w-1/4">
          <label>Supplier Code:</label>
          <SuppDrop onChange={(value) => handleChange({ target: { value } }, 'supp_code')} />
        </div>

        </div> 
<hr/>


<div>
        <div className="header-text2 text-center justify-center d-flex p-2">
            <h1>Details</h1>
            </div>
<div className="table-div p-2 overflow-scroll">
  <table className="table table-bordered" id="myTable">
    <thead>
    <tr>
                            <th scope="col">Item Code</th>
                            <th scope="col">Rate</th>
                            <th scope="col">Quantity</th>
                            <th scope="col">Misc Cost</th>
                            <th scope="col">Price</th>
                          </tr>
    </thead>
    <tbody>
      <tr>

      <td scope="row">
              <ProdDrop onChange={(prod_code) => handleChange({ target: { value: prod_code } }, 'prod_code')} />
             </td>

  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    name="rate"
                    min="1"
                    placeholder="ex: 499"
                    value={formData.rate}
                    onChange={(e) => handleChange(e, 'rate')}
                    required
                />
  </td>
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    name="qnty"
                    min="1"
                    placeholder="ex: 10"
                    value={formData.qnty}
                    onChange={(e) => handleChange(e, 'qnty')}
                    required
                />
  </td>
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    min="0"
                    name="misc"
                    placeholder="Any extra"
                    value={formData.misc}
                    onChange={(e) => handleChange(e, 'misc')}
                    required
                />
  </td>
  
  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    min="1"
                    name="price"
                    placeholder="ex: 499"
                    value={formData.price}
                    onChange={(e) => handleChange(e, 'price')}
                    required
                />
  </td>

  </tr>
            </tbody>
            

            

          </table>

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
      <Detail/>
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

// refresh page after cancel button to clear everything in the  form
const resetPage = (e) => {
  //alert('Form submission canceled');
  window.location.reload(false);
};

export default QuoteForm;