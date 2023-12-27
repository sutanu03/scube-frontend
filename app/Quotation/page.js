"use client"
import React from 'react';
import DynamicDropdown from '@/Components/DynamicDropdown';
import TableComponent from '@/Components/TableComponent';
import AddRowButton from '@/Components/AddRowButton';
import quotation from './quotation.css'
import axios from 'axios';
import QuoteForm from '@/Components/QuoteForm';

const page = () => {
  const currDate = new Date().toLocaleDateString();
const currTime = new Date().toLocaleTimeString();

{/*}
const handleAddRow = () => {
  // Implement logic to add a row in your app state, or use a global state management solution
  // For simplicity, we'll just log a message here
  <TableComponent/>>
  console.log('Adding a new row from the app!');
};

*/}

  return (
    <div>    
           
       <QuoteForm />
        
{/*

<div className="table-div p-2">

<table className="table table-bordered" id="myTable">
<thead>
<tr className="table-active">
  <th scope="col">Item Code</th>
  <th scope="col">Description</th>
  <th scope="col">Rate</th>
  <th scope="col">Misc Cost</th>
  <th scope="col">Quantity</th>
  <th scope="col">Price</th>
  <th scope="col">Discount(%)</th>
  <th scope="col">Final Price</th>
  
</tr>

</thead>
<tbody>
<tr>
  <th scope="row">
        <DynamicDropdown apiEndpoint="https://api.publicapis.org/entries" />
</th>
  <td className="text-center align-middle" id="description">
    <input className="select-input"
          type="text"
          name="g_description"
          placeholder="write about quotation(within 250 letters)"
          required
        />
  </td>
  <td className="text-center align-middle">
    <input className="select-input" type="number" name="h_rate" placeholder="ex: 499" required />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
    type="number"
    name="j_misc"
    placeholder="Any extra"
    required
  />
  </td>
  <td className="text-center align-middle">
    <input className="select-input" type="number" name="i_qnty" placeholder="ex: 10" required />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="k_price"
          placeholder="ex: 499"
          required
        />
  </td>
  
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="l_discount"
          placeholder="ex: 5"
          required
        />
  </td>
  <td className="text-center align-middle">
    <input className="select-input"
          type="number"
          name="m_finalAmount"
          placeholder="ex: 1299"
          required
        />
  </td>
</tr>


</tbody>

</table>
{/* <AddRowButton onAddRow={handleAddRow} />


</div> */}


    </div>
  );
}

export default page
