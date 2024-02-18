import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditQuote = ({ onChange, quotation_no }) => {

  const [quotation_num, setquotation_num] = useState('');
  setquotation_num(quotation_no);

  const [formData, setFormData] = useState({
    quotation_number: "",
    c_q_date: "",
    d_submission_date: '',
    supplier: { supp_code: "" },
    quotationDetail: [
      {
        quote_details_id: "",
        product: { prod_code: "" },
        d_rate: "",
        e_qnty: "",
        f_misc: "",
        h_price: ""
      }
    ]
  });

  useEffect(() => {
    fetchQuoteData();
  }, []);

  const fetchQuoteData = async () => {
    try {
      const response = await axios.get(`http://localhost:8088/api/quote/${quotation_no}`);
      const data = response.data;
      setFormData(data);
      console.log(data)
    } catch (error) {
      console.log(data)
      console.error('Error fetching quote data:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <div>
      <form>
        {/* Render other form inputs */}
        
      </form>
    </div>
  );
};

export default EditQuote;
