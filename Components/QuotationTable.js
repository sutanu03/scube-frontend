// QuotationTable.js
import React from 'react';
import { FaEdit } from "react-icons/fa";

const QuotationTable = ({ quotations, onQuotationClick }) => {
  const clickedButton = (e, quotation_number) => {
    e.preventDefault();
  //  console.log(quotation_number)
    onQuotationClick(quotation_number);
  };

  return (
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
  );
};

export default QuotationTable;
