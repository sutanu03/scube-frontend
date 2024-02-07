"use client"
import React, { useState } from 'react';
import QuoteForm from '@/Components/QuoteForm';
import SimpleQuote from '@/Components/SimpleQuote';
import TableNew from '@/Components/TableNew';
const Quotation = () => {
  return (
    <>
    <SimpleQuote/>
    </>
  );
};

export default Quotation;
  
  {/*
  <QuoteForm/>
  <TableNew/>
  

  const [formData, setFormData] = useState({
    quotation_number: '',
    c_q_date: '',
    d_submission_date: '',
    supplier: {
      supp_code: ''
    },
    quotationDetail: [
      {
        quotation: {
          quotation_number: ''
        },
        product: {
          prod_code: ''
        },
        d_rate: 0,
        e_qnty: 0,
        f_misc: 0,
        g_price: 0
      }
    ]
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleDetailChange = (e, index) => {
    const { name, value } = e.target;
    const updatedDetail = [...formData.quotationDetail];
    updatedDetail[index] = {
      ...updatedDetail[index],
      [name]: value
    };
    setFormData({
      ...formData,
      quotationDetail: updatedDetail
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('your_rest_endpoint_url', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      console.log('Data saved successfully');
    } catch (error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Quotation Number:
        <input type="text" name="quotation_number" value={formData.quotation_number} onChange={handleChange} />
      </label>
      <label>
        Creation Date:
        <input type="date" name="c_q_date" value={formData.c_q_date} onChange={handleChange} />
      </label>
      <label>
        Submission Date:
        <input type="date" name="d_submission_date" value={formData.d_submission_date} onChange={handleChange} />
      </label>
      <label>
        Supplier Code:
        <input type="text" name="supplierCode" value={formData.supplier.supp_code} onChange={(e) => handleDetailChange(e, 0)} />
      </label>

      {formData.quotationDetail.map((detail, index) => (
        <div key={index}>
          <label>
            Product Code:
            <input type="text" name="productCode" value={detail.product.prod_code} onChange={(e) => handleDetailChange(e, index)} />
          </label>
          <label>
            Rate:
            <input type="number" name="rate" value={detail.d_rate} onChange={(e) => handleDetailChange(e, index)} />
          </label>
          <label>
            Quantity:
            <input type="number" name="quantity" value={detail.e_qnty} onChange={(e) => handleDetailChange(e, index)} />
          </label>
          <label>
            Miscellaneous:
            <input type="number" name="miscellaneous" value={detail.f_misc} onChange={(e) => handleDetailChange(e, index)} />
          </label>
          <label>
            Price:
            <input type="number" name="price" value={detail.g_price} onChange={(e) => handleDetailChange(e, index)} />
          </label>
        </div>
      ))}

      <button type="button" onClick={() => setFormData({ ...formData, quotationDetail: [...formData.quotationDetail, {}] })}>
        Add Detail
      </button>

      <button type="submit">Submit</button>
    </form>
  );
*/}
