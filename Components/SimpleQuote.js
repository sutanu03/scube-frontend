import React, { useState } from 'react';

const SimpleQuote = () => {

  const [quotation, setQuotation] = useState({
    quotation_number: '',
    c_q_date: '',
    d_submission_date: '',
    supplier: {
      supp_code: '',
      b_supp_name: '',
      c_address: '',
      d_contact_number: '',
      e_contact_person: '',
      f_designation: '',
      g_mobile_no: '',
      h_gst_number: ''
    },
    quotationDetail: [
      {
        quote_details_id: '',
        product: {
          prod_code: '',
          b_prod_name: '',
          c_description: '',
          d_unit_price: '',
          e_category: ''
        },
        d_rate: '',
        e_qnty: '',
        f_misc: '',
        g_price: ''
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setQuotation(prevQuotation => ({
      ...prevQuotation,
      [name]: value
    }));
  };

  const handleSupplierChange = (e) => {
    const { name, value } = e.target;
    setQuotation(prevQuotation => ({
      ...prevQuotation,
      supplier: {
        ...prevQuotation.supplier,
        [name]: value
      }
    }));
  };

  const handleQuotationDetailChange = (e, index) => {
    const { name, value } = e.target;
    setQuotation(prevQuotation => ({
      ...prevQuotation,
      quotationDetail: prevQuotation.quotationDetail.map((detail, i) => i === index ? { ...detail, [name]: value } : detail)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quotation);
    // You can perform further actions like sending the data to a server here
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Quotation Number:
        <input type="text" name="quotation_number" value={quotation.quotation_number} onChange={handleChange} />
      </label>
      <label>Quotation Date:
        <input type="date" name="c_q_date" value={quotation.c_q_date} onChange={handleChange} />
      </label>
      <label>Submission Date:
        <input type="date" name="d_submission_date" value={quotation.d_submission_date} onChange={handleChange} />
      </label>
      <h2>Supplier Details:</h2>
      <label>Supplier Code:
        <input type="text" name="supp_code" value={quotation.supplier.supp_code} onChange={handleSupplierChange} />
      </label>
      {/* Add more fields for other supplier details */}
      <h2>Quotation Details:</h2>
      {quotation.quotationDetail.map((detail, index) => (
        <div key={index}>
          <h3>Detail {index + 1}</h3>
          <label>Quote Details ID:
            <input type="text" name="quote_details_id" value={detail.quote_details_id} onChange={(e) => handleQuotationDetailChange(e, index)} />
          </label>
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

  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    name="rate"
                    min="1"
                    placeholder="ex: 499"
                    value={detail.rate} onChange={(e) => handleQuotationDetailChange(e, index)}
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
                    value={detail.qnty} onChange={(e) => handleQuotationDetailChange(e, index)}
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
                    value={detail.misc} onChange={(e) => handleQuotationDetailChange(e, misc)}
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
                    value={detail.price} onChange={(e) => handleQuotationDetailChange(e, price)}
                    required
                />
  </td>

  </tr>
            </tbody>
            

            

          </table>

</div>

    </div>
        </div>
      ))}
      <button type="submit">Save</button>
    </form>
  );
};

export default SimpleQuote


