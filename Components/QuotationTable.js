// QuotationTable.js
import React, { useState } from 'react';
import { FaEdit } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SimpleQuote from './SimpleQuote';
import EditQuote from './EditQuote';
import axios from 'axios';
import QuotationDetails from './QuotationDetails';

const QuotationTable = ({ quotations, onQuotationClick }) => {

  const [parsedData, setparsedData] = useState([])

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
      console.log("Full data:"+ JSON.stringify(data));
      // Assuming 'data' is the object you received
console.log("Full data:", data); // This will show you the object structure in the console
      setparsedData(data);

      console.log("full data: "+data)
      //const a = JSON.parse(data);
    // setparsedData(a);
    // console.log("parsed data : "+parsedData)
    } catch (error) {
     // console.log(data)
      console.error('Error fetching quote data:', error);
    }
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
        {quotations.map(quotation => (
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

        {/* <QuotationDetails data={parsedData} /> */}

        {quotation_no}

        
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" className='bttn' onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" className='bttn'>Save</Button>
        </Modal.Footer>
      </Modal>
      </div> 
    </>
  );
};

export default QuotationTable;
