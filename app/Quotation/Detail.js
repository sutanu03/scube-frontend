import { useState, useEffect } from 'react';

const Detail = () => {
      
  const [quotation, setQuotation] = useState([]);
  useEffect(() => {
    fetch('http://localhost:8088/api/quote/read/all')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setQuotation(data);
      });
  }, []);
  return (
    <div>
      
      {quotation.map((quotation) => (
        <img key={quotation.quotation_number} alt={quotation.title} width={100} />
      ))}
    </div>
  );
};

export default Detail
