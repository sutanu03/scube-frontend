import React, { useState } from 'react';

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
      console.log(quotation);
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  {/* <th>Details</th> */}
{/* <td>{quotation.details}</td> */}
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Supplier Code:
          <input type="text" value={supp_code} onChange={(e) => setSupplierCode(e.target.value)} />
        </label>
        <label>
          From Date:
          <input type="date" value={fromDate} onChange={(e) => setFromDate(e.target.value)} />
        </label>
        <label>
          To Date:
          <input type="date" value={toDate} onChange={(e) => setToDate(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            
          </tr>
        </thead>
        <tbody>
          {/* {quotation.map((quotation) => (
            <tr key={quotation.quotation_number}>
              <td>{quotation.quotation_number}</td>
            </tr>
          ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationForm;
