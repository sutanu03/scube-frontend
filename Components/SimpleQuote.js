import React, { useState, useEffect } from 'react';
import SuppDrop from '@/Components/SuppDrop';
import axios from 'axios';
import AddRemoveMultipleInputFields from '@/Components/AddRemoveMultipleInputFields';

const SimpleQuote = ({ onChange }) => {


  // Add a state to manage the visibility of the modal
const [isModalOpen, setIsModalOpen] = useState(false);

// Function to open the modal
const openModal = () => {
  setIsModalOpen(true);
};

// Function to close the modal
const closeModal = () => {
  setIsModalOpen(false);
};


  const [formData, setFormData] = useState({
    quotation_number: "",
    c_q_date: "",
    d_submission_date: getCurrentDate(),
    supplier: { supp_code: "" },
    quotationDetail: [
      {
        quote_details_id: "",
        product: { prod_code: "" },
        d_rate: "",
        e_qnty: "",
        f_misc: "",
        g_price: ""
      }
    ]
  });

  const updateQuotationDetail = (quotationDetail) => {
    setFormData({ ...formData, quotationDetail });
  };


const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData({
    ...formData,
    [name]: value
  });
};

  const handleSupplierChange = (value) => { 
    setFormData({
      ...formData,
      supplier: value
    });
  };

  // state to check if the formData number exists
  const [isQuotationNumberExists, setIsQuotationNumberExists] = useState(false);

  useEffect(() => {
    // Check formData number existence when formData.quotation_number changes
    checkQuotationNumberExists();
  }, [formData.quotation_number]);

  const checkQuotationNumberExists = async () => {
    try {
      const response = await axios.post('http://localhost:8088/api/quote/checkQuotationNumber', {
        quotationNumber: formData.quotation_number,
      });

      setIsQuotationNumberExists(response.data.exists);
    } catch (error) {
      console.error('Error checking formData number:', error);
    }
  };

  // call after submit the form
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if formData number already exists before submitting
    if (isQuotationNumberExists) {
      // Show a message or take appropriate action
      alert('Quotation number already exists. Please choose a different one.');
      return;
    }
   // setFormData(...formData, quotationDetail.product.prod_code,);
    // Continue with form submission
   
    //console.log(formData2);
    console.log(formData.supplier);
    console.log(formData.quotationDetail);

    const t = {
      "quotation_number": formData.quotation_number,
      "c_q_date": formData.c_q_date,
      "d_submission_date": formData.d_submission_date,
      "supplier" : {
      "supp_code": formData.supplier.supp_code
      },
      "quotationDetail" : formData.quotationDetail
  }
  console.log(JSON.stringify(t));
  
  console.log(t.supplier.supp_code);
  //  saveFormDataToDatabase(t);  
    console.log('Form submitted:', t);
   // saveFormDataToDatabase2(formData2);
  };


  // method/funtion to save formData into database using api 

  const saveFormDataToDatabase = (data) => {
    const apiEndpoint = 'http://localhost:8088/api/quote/add';

    axios.post(apiEndpoint, data)
      .then(response => {
        console.log('Form data saved successfully:', response.data);
        console.log(data);
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

  return (
    <form onSubmit={handleSubmit}>
      <div className="master-data d-flex m-1 justify-around text-justify">

<div className="data-1 flex w-1/6 align-middle justify-center">
<label className='w-[150px]'>Quotation Number:</label>
    <div className='text-center'>
    
    <input
      type="text"
      name="quotation_number"
      placeholder='pttrn: Quote-00?'
      value={formData.quotation_number}
      onChange={handleChange}
      required
    />
    {isQuotationNumberExists && <div style={{ color: 'red', width: '200px'}}>Quotation number already exists!</div>}
    </div>
  </div>
      
  <div className="data-1 d-flex w-1/6 justify-center">
<label>Quotation Date:</label>
<input type="date" name="c_q_date" value={formData.c_q_date} onChange={handleChange} max={new Date().toISOString().split('T')[0]} required/>
</div>

<div className="data-1 d-flex w-1/6 justify-center">
          <label htmlFor="submission_date" className='w-[110px]'>Submission Date:</label>
          <input
        type="text"
        id="submission_date"
        name="submission_date"
        className='outline-none border-transparent focus:border-transparent focus:ring-0 w-1/3'
        value={formData.d_submission_date}
        onChange={handleChange}
        readOnly // Make the current date input read-only
        required
      />
    </div>

    <div className="data-1 d-flex w-1/6 justify-center">
          <label>Supplier Code:</label>
          <SuppDrop onChange={handleSupplierChange} />
        </div>
        {/* <div className="data-1 d-flex w-1/6">
          <label>Supplier Name:</label>
          <SuppDrop onChange={handleSupplierChange}/>
        </div> */}

     {/*}   <div className="data-1 d-flex w-1/4">
          <label>Supplier Code:</label>
          <input type="text" name="supp_code" placeholder='Supplier Code'
          value={formData.supplier.supp_code}
           onChange={handleSupplierChange} />
          
        </div>
  */}

        </div> 
<hr/>
      {/* Add more fields for other supplier details 


<SuppDrop onChange={(value) => handleChange({ target: { value } }, 'supp_code')} />


<ProdDrop onChange={(prod_code) => handleChange({ target: { value: prod_code } }, 'prod_code')} />

      {formData.quotationDetail.map((detail, index) => (
        <div key={index}>
      <h3>Detail {index + 1}</h3>
      value={detail.price} onChange={(e) => handleQuotationDetailChange(e, price)}
      <label>Quote Details ID:
            <input type="text" name="quote_details_id" 
            value={formData.quotationDetail.quote_details_id} 
            onChange={handleQuotationDetailChange} />
          </label>
                <h2>Quotation Details:</h2>
      */}

      <div className="justify-around text-center w-full h-28 top-5">
        <h1 className='font-bold justify-center align-middle items-center mt-5 text-xl'>Search Quotation</h1>
        {/* <div className="justify-around align-middle items-center flex ">
          <div className="col">
            <label  className="text-black">
              FROM:</label>
            <input type="date" name="" id="" placeholder='From Date' className='w-[200px]'/>
            </div>
            <div>
            <label  className="text-black">
              TO:</label>
              <input type="date" name="" id="" placeholder='To Date' className='w-[200px]'/>
            </div>
            <div>
            <label  className="text-black">
              Supplier Code:</label>
              <select>
                <option value="2" key="">CTS-03-002</option>
                <option value="3" key="">LTI-04-003</option>
                <option value="1" key="">TCS-01-001</option>
              </select>
            </div>
            <div className="col-span-2">
            <label  className="text-black">
              Supplier Name:</label>
              <span>
                Tata Consultancy Services
              </span>
            </div>
            
          
        <button disabled className='ml-4 bg-slate-500 text-white h-8 w-16 rounded-md'>Search</button>
        </div> */}
      </div>
      <hr />

<div className="overflow-scroll h-[320px]">
  {/*<AddDeleteTableRows/>*/}
        
{/*}
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

      <AddRemoveMultipleInputFields/>
      
            </tbody>
            

            

          </table>

</div>

    

    */}
    <AddRemoveMultipleInputFields updateQuotationDetail={updateQuotationDetail} />
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
  //confirm('Want to cancel form submission?');
  window.location.reload(false);
};

export default SimpleQuote


