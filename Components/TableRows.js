
import ProdDrop from '@/Components/ProdDrop'

function TableRows({rowsData, deleteTableRows, handleChange, onChange }) {


    return(
        
        rowsData.map((data, index)=>{
            const {
                product: {
              prod_code
            },
            d_rate,
            e_qnty,
            f_misc,
            g_price
            }= data;
            return(

                <tr key={index}>
                    
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
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;