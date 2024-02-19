import React, { useState } from 'react'

const ViewQuotationMaster = (parsedData) => {

  const copy = parsedData;

    const {quotation_number, c_q_date, d_submission_date} = parsedData;
  //  const {supp_code, b_supp_name} = parsedData.supplier;

  console.log("copy : "+JSON.stringify(copy))

  return (
    <>

    <div>
        <h2>Q No : {quotation_number}</h2>
        <h2>Q Date : {c_q_date}</h2>
        <h2>Sub Date : {d_submission_date}</h2>
        {/* <h2>{supp_code}</h2> */}
    </div>

    {/* <p>{parsedData}</p> */}

    {/* <p>json detail : {quotation_number}, {c_q_date}, {d_submission_date}</p> */}

{/* {
parsedData.map(quotation => {
  return (
    <div key={quotation.quotation_number}>
        <h2>{quotation.quotation_number}</h2>
        <h2>{quotation.c_q_date}</h2>
        <h2>{quotation.d_submission_date}</h2>
        {quotation.supplier && quotation.supplier.map(supplier => (
            <div key={quotation.quotation_number}>
                <h2>{supplier.supp_code}</h2>
                <h2>{supplier.b_supp_name}</h2>
            </div>
        ))}
    </div>
  )

})
} */}
      
    </>
  )
}

export default ViewQuotationMaster
