// QuotationForm.js
import { FaSearch } from "react-icons/fa";
import React, { useState } from 'react';
import QuotationTable from './QuotationTable';

const QuotationForm = () => {
  const [supp_code, setSupplierCode] = useState('');
  const [fromDate, setFromDate] = useState('');
  const [toDate, setToDate] = useState('');
  const [quotation, setQuotationData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`http://localhost:8088/api/quote/search/advance?supp_code=${supp_code}&fromDate=${fromDate}&toDate=${toDate}`);
      const data = await response.json();
      setQuotationData(data);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleQuotationClick = (quotation_number) => {
    //alert("You've clicked on quotation number : "+ quotation_number);
    console.log(quotation_number);
  };

  return (
    <>
      <div className="advnce-div">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between">
            <label>From :</label>
            <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} className="w-[120px]" required/>
          </div>
          <div className="flex justify-between">
            <label>To :</label>
            <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} className="w-[120px]" required/>
          </div>
          <div className="flex justify-between gap-10">
            <label>Supplier Code :</label>
            <input type="text" value={supp_code} onChange={(e) => setSupplierCode(e.target.value)} className="w-[120px]" required/>
          </div>
          <div className="flex">
            <button type="submit" className='button bg-slate-700 text-white h-8 rounded-lg w-10 text-center align-middle justify-center'>
              <FaSearch/>
            </button>
          </div>
        </form>
      </div>
      <hr/>
      <QuotationTable quotations={quotation} onQuotationClick={handleQuotationClick} />
    </>
  );
};

export default QuotationForm;
