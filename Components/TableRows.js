
import ProdDrop from '@/Components/ProdDrop'

function TableRows({rowsData, deleteTableRows, handleChange, onChange }) {


    return(
        
        rowsData.map((data, index)=>{
            const {fullName, emailAddress, salary}= data;
            return(

                <tr key={index}>
                    
                    <td scope="row">
              <ProdDrop onChange={(prod_code) => handleChange({ target: { value: prod_code } }, 'prod_code')} />
             </td>

  <td className="text-center align-middle">
  <input
                    className="select-input"
                    type="number"
                    name="rate"
                    min="1"
                    placeholder="ex: 499"
                    value={formData.rate}
                    onChange={(e) => handleChange(e, 'rate')}
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
                    value={formData.qnty}
                    onChange={(e) => handleChange(e, 'qnty')}
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
                    value={formData.misc}
                    onChange={(e) => handleChange(e, 'misc')}
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
                    value={formData.price}
                    onChange={(e) => handleChange(e, 'price')}
                    required
                />
  </td>
                <td><button className="btn btn-outline-danger" onClick={()=>(deleteTableRows(index))}>x</button></td>
            </tr>

            )
        })
   
    )
    
}

export default TableRows;