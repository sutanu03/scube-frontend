import React, { useState, useEffect } from 'react';
import SuppDrop from '@/Components/SuppDrop';
import axios from 'axios';
import AddRemoveMultipleInputFields from '@/app/Quotation/Components/AddRemoveMultipleInputFields';
import { Zoom, toast } from 'react-toastify';

const CreatePO = () => {

    const [poData, setpoData] = useState({
        po_number: "",
        b_po_date: "",
        c_del_date: "",
        d_total_amt: "",
        quotation: { quotation_number: "" },
        supplier: { supp_code: "" },
        purchase_order_detail: [
          {
            product: { prod_code: "" },
            d_rate: "",
            e_qnty: "",
            g_price: ""
          }
        ]
      });


      const updateQuotationDetail = (quotationDetail) => {
        setpoData({ ...poData, quotationDetail });
      };
    
    
    const handleChange = (e) => {
      const { name, value } = e.target;
      setpoData({
        ...poData,
        [name]: value
      });
    };
    
      const handleSupplierChange = (value) => { 
        setpoData({
          ...poData,
          supplier: value
        });
      };
    
      // state to check if the poData number exists
      const [isQuotationNumberExists, setIsQuotationNumberExists] = useState(false);
    
      useEffect(() => {
        // Check poData number existence when poData.quotation_number changes
        checkQuotationNumberExists();
      }, [poData.quotation_number]);
    
      const checkQuotationNumberExists = async () => {
        try {
          const response = await axios.post('http://localhost:8088/api/quote/checkQuotationNumber', {
            quotationNumber: poData.quotation_number,
          });
    
          setIsQuotationNumberExists(response.data.exists);
    
    /*       toast.error('Quotation number exists!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            }); */
    
        } catch (error) {
          console.error('Error checking poData number:', error);
        }
      };
    
      // call after submit the form
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if poData number already exists before submitting
        if (isQuotationNumberExists) {
          // Show a message or take appropriate action
          toast.error('Quotation number exists!', {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Zoom,
            });
          return;
        }
       // setpoData(...poData, quotationDetail.product.prod_code,);
        // Continue with form submission
       
        //console.log(poData2);
        console.log(poData.supplier);
        console.log(poData.quotationDetail);
    
        const t = {
          "quotation_number": poData.quotation_number,
          "c_q_date": poData.c_q_date,
          "d_submission_date": poData.d_submission_date,
          "supplier" : {
          "supp_code": poData.supplier.supp_code
          },
          "quotationDetail" : poData.quotationDetail
      }
      console.log(JSON.stringify(t));
      
      console.log(t.supplier.supp_code);
        savepoDataToDatabase(t);  
        console.log('Form submitted:', t);
       // savepoDataToDatabase2(poData2);
      };
    
    
      // method/funtion to save poData into database using api 
    
      const savepoDataToDatabase = (data) => {
        const apiEndpoint = 'http://localhost:8088/api/quote/add';
    
        axios.post(apiEndpoint, data)
          .then(response => {
            console.log('Form data saved successfully:', response.data);
            console.log(data);
            resetPage();
          //  reset();
          })
          .catch(error => {
            console.error('Error saving form data:', error);
          });
      };
    
      function resetpoData() {
        window.location.reload(false);
        alert("Quotation created!");
      }


  return (
    <>


<form onSubmit={handleSubmit}>
      <div className="master-data d-flex m-1 justify-around text-justify">

<div className="data-1 flex w-1/4 align-middle justify-center">
<label className='w-[200px]'>Purchase Order Number:</label>
    <div className='text-center'>
    
    <input
      type="text"
      name="quotation_number"
      placeholder='pttrn: PO-00?'
      value={poData.quotation_number}
      onChange={handleChange}
      required
    />
    {isQuotationNumberExists}
    </div>
  </div>
      
  <div className="data-1 d-flex w-1/4 justify-center">
<label className='w-[200px]'>Purchase Order Date:</label>
<input type="date" name="c_q_date" value={poData.c_q_date} onChange={handleChange} max={new Date().toISOString().split('T')[0]} required/>
</div>

    <div className="data-1 d-flex w-1/4 justify-center">
          <label >Supplier Code:</label>
          <SuppDrop onChange={handleSupplierChange} />
        </div>

        </div> 
<hr/>
     
      <hr />

<div className="overflow-scroll h-[320px]">
 
   {/*  <AddRemoveMultipleInputFields updateQuotationDetail={updateQuotationDetail} /> */}

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
      
    </>
  )
}
  
  // refresh page after cancel button to clear everything in the  form
  const resetPage = (e) => {
    //confirm('Want to cancel form submission?');
    window.location.reload(false);
  };

export default CreatePO
