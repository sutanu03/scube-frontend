// QuotationTable.js
"use client"
import React, { useEffect, useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';
import { Bounce, Slide, toast } from 'react-toastify';

const QuotationTable = ({ quotations, onQuotationClick }) => {

  const [parsedData, setparsedData] = useState([])

  const [editedData, setEditedData] = useState(parsedData);

  const [detail, setDetail] = useState([])

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  const [quotation_no, setQuotation_no] = useState('')
  const clickedButton = (e, quotation_number) => {
    setShow(true);
    e.preventDefault();
   // console.log("from"+quotation_number)
    onQuotationClick(quotation_number);
    setQuotation_no(quotation_number);
    fetchQuoteData(quotation_number);
  };

  const fetchQuoteData = async (quotation_number) => {
    try {
      const response = await axios.get(`http://localhost:8088/api/quote/read/${quotation_number}`);
      const data = await response.data;
      // Assuming 'data' is the object you received
//console.log("Full Data:", data); // This will show you the object structure in the console
      setparsedData(data);

      const jsonData = JSON.stringify(data);
      //console.log("Full data stringify:"+ jsonData);

      setDetail(jsonData);

     //console.log("detail: "+detail)
      //const a = JSON.parse(data);
    // setparsedData(a);
    // console.log("parsed data : "+parsedData)
    } catch (error) {
     // console.log(data)
      console.error('Error fetching quote data:', error);
    }
  };

  const handleChange = (index, field, value) => {
    setEditedData(prevState => ({
      ...prevState,
      [index]: {
        ...prevState[index],
        [field]: value
      }
    }));
  };

  const onChange = (e, quote_detail_id) => {
    const { name, value } = e.target

    const editData = parsedData?.map((item) =>
      item.quote_detail_id === quote_detail_id && name ? { ...item, [name]: value } : item
    )

    setEditedData(editData.quotationDetail)

    console.log(editData)
  }

/*   const calculatePrice = (item) => {
    const d_rate = item.d_rate;
    const e_qnty = item.e_qnty;
    const f_misc = item.f_misc;
    return (d_rate * e_qnty) + f_misc;
  };
 */
  const handleSave = () => {
    // Merge edited data with parsedData
    const updatedData = {
      ...parsedData,
      quotationDetail: parsedData.quotationDetail.map((detail, index) => ({
        ...detail,
        ...editedData[index]
      }))
    };
  
    // Add quotation_number to each quotation detail
    updatedData.quotationDetail.forEach(detail => {
      detail.quotation_number = parsedData.quotation_number;
    });


  
    console.log(updatedData);

    setShow(false);
    // Save updated data to the database
    saveFormDataToDatabase(updatedData, updatedData.quotation_number);
  };
  

  const saveFormDataToDatabase = (data, quotation_number) => {
    const apiEndpoint = `http://localhost:8088/api/quote/update/${quotation_number}`;
    axios.post(apiEndpoint, data)
      .then(response => {
        setShow(false);

        console.log('Form data saved successfully:', response.data);

        toast.success('Quotation Updated!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Slide,
          });
          console.log(JSON.stringify(data));
        //  alert("w8")
       // console.log(data);
       // resetFormData();
      //  reset();
      })
      .catch(error => {
        console.error('Error saving form data:', error);
      });
  };


  return (
    <>
    
    <table className="table border-e-red-50">
      <thead>
        <tr>
          <th>Quotation Number</th>
          <th>Quotation Date</th>
          <th>Submission Date</th>
          <th>Supplier Code</th>
        </tr>
      </thead>
      <tbody>
        {quotations?.map(quotation => (
          <tr key={quotation.quotation_number}>
            <td>
              <button title='Click to edit' onClick={(e) => clickedButton(e, quotation.quotation_number)}>
                <div className='flex gap-2 justify-center align-middle text-center'>
                {quotation.quotation_number} <div className='mt-1'><FaEdit/></div>
                </div>
              </button>
            </td>
            <td>{quotation.c_q_date}</td>
            <td>{quotation.d_submission_date}</td>
            <td>{quotation.supplier.supp_code}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <div>
    <Modal
        show={show}
        size='xl'
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        backdropClassName='' // this one for backdrop
      contentClassName="bg-white border-0" // this one for content
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Quotation for : {quotation_no}</Modal.Title>
        </Modal.Header>
        
      <Modal.Body>

        <div className='flex justify-between font-semibold mb-2 text-zinc-600'>
        <h2>Quotation Number : {parsedData?.quotation_number}</h2> 
        <h2>Quotation Date : {parsedData?.c_q_date}</h2>
        <h2>Submission Date : {parsedData?.d_submission_date}</h2>
        <h2>Supplier Code : {parsedData?.supplier?.supp_code}</h2>      
        </div>
        <hr/>

        <table>
          <thead>
            <tr className='text-center'>
              <th>Product Code</th>
              <th>Unit Price</th>
              <th>Quantity</th>
              <th>Misc</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody className='items-center justify-center align-middle text-center'>
            {parsedData?.quotationDetail?.map((detail, index) => (
              <tr key={index}>
                <td>{detail?.product?.prod_code}</td>
                <td>
                  <input
                    type="number"
                    min="99" max="99999"
                    //value={detail?.d_rate}
                    value={editedData[index]?.d_rate || detail.d_rate} 
                    onChange={(e) => handleChange(index, 'd_rate', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="1" max="9999"
                    value={editedData[index]?.e_qnty || detail.e_qnty}
                    onChange={(e) => handleChange(index, 'e_qnty', e.target.value)}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    min="0" max="99999"
                    value={editedData[index]?.f_misc || detail.f_misc}
                    onChange={(e) => handleChange(index, 'f_misc', e.target.value)}
                  />
                </td>
                <td>{detail?.h_price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Modal.Body>
      {/* Modal Footer */}
      <Modal.Footer>
        <Button variant="secondary" className='bttn' onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" className='bttn' onClick={handleSave}>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
      </div> 
    </>
  );
};


// refresh page after cancel button to clear everything in the  form
function resetFormData() {
  window.location.reload(false);
}

export default QuotationTable;
