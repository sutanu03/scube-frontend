// QuotationTable.js
import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SimpleQuote from './SimpleQuote';
import QuotationDetailTable from './EditQuote'
import axios from 'axios';
import ViewQuotationMaster from './ViewQuotationMaster';

const QuotationTable = ({ quotations, onQuotationClick }) => {

  const [parsedData, setparsedData] = useState([])

  const [editedData, setEditedData] = useState({});

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
    // Now updatedData has the changes, you can do something with it like sending it to an API or updating state
    setShow(false);
    console.log('Updated Data:'+ JSON.stringify(updatedData));

    alert("Quotation Updated!")
    // Call a function to handle updating the data
    // updateData(updatedData);
  };


  return (
    <>
    {/* <p>json data : {detail}</p> */}
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

export default QuotationTable;
