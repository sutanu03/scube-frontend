// TableRow.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import AddDeleteTableRows from './AddRemoveMultipleInputFields';

const TableRow = ({ onChange }) => {

  return (
    <div>
      <tr>

<td scope="row">
<input type="text" name="prod_code" placeholder='Prod-001'
    value={product_code}
     onChange={handleProductChange} />
       </td>

<td className="text-center align-middle">
<input
              className="select-input"
              type="number"
              name="d_rate"
              min="1"
              required
              placeholder="ex: 499"
              value={formData.quotationDetail.d_rate}
              onChange={handleQuotationDetailChange}
          />
</td>
<td className="text-center align-middle">
<input
              className="select-input"
              type="number"
              name="e_qnty"
              min="1"
              required
              placeholder="ex: 10"
              value={formData.quotationDetail.e_qnty}
              onChange={handleQuotationDetailChange}
          />
</td>
<td className="text-center align-middle">
<input
              className="select-input"
              type="number"
              name="f_misc"
              min="0"
              required
              placeholder="Any extra"
              value={formData.quotationDetail.f_misc}
              onChange={handleQuotationDetailChange}
          />
</td>

<td className="text-center align-middle">
<input
              className="select-input"
              type="number"
              name="g_price"
              min="1"
              required
              placeholder="ex: 499"
              value={formData.quotationDetail.g_price}
              onChange={handleQuotationDetailChange}
          />
</td>

</tr>
    </div>
  )
}

export default TableRow;
