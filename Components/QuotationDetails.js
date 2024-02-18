import React from 'react';

const QuotationDetails = ({ data }) => {
  // Parse the JSON string to an object
 // const parsedData = JSON.parse(data);
 const parsedData = data;
 console.log("data : "+parsedData)

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Quotation Number</th>
            <th>Submission Date</th>
            <th>Supplier Code</th>
            <th>Contact Person</th>
            <th>Product</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th>Miscellaneous</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {/* Map over the quotationDetail array to render each row */}
          {parsedData.quotationDetail.map((detail, index) => (
            <tr key={index}>
              <td>{parsedData.quotation_number}</td>
              <td>{parsedData.d_submission_date}</td>
              <td>{parsedData.supplier.supp_code}</td>
              <td>{detail.product.prod_code}</td>
              <td>{detail.e_qnty}</td>
              <td>{detail.f_misc}</td>
              <td>{detail.h_price}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QuotationDetails;
