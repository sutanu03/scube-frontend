import { useState } from "react"

import ProdDrop from '@/Components/ProdDrop'
/*
import javax.persistence.EntityManager;
import javax.persistence.Query;
import java.util.List;

public class JpaClass {

    private EntityManager entityManager;

    public List<Object[]> executeQuery() {
        String jpql = "SELECT p.NAME, p.ID " +
                      "FROM PepUser u " +
                      "INNER JOIN u.person p " +
                      "INNER JOIN p.role r " +
                      "INNER JOIN RolePermission rp ON r.roleName = rp.role " +
                      "INNER JOIN Permission pt ON rp.permissionId = pt.id " +
                      "WHERE u.id = :userId";

        Query query = entityManager.createQuery(jpql);
        query.setParameter("userId", 532);

        return query.getResultList();
    }
}


SELECT 
    PTL_PERMISSIONS.NAME,PTL_PERMISSIONS.ID
FROM 
    PEP_USERS
INNER JOIN PEP_PERSON ON PEP_USERS.PERSON_ID =PEP_PERSON.PERSON_ID
INNER JOIN PEP_ROLES ON PEP_ROLES.ROLE_ID=PEP_PERSON.ROLE_ID 
INNER JOIN PTL_ROLE_PERMISSIONS ON  PTL_ROLE_PERMISSIONS.ROLE =PEP_ROLES.ROLE_NAME
INNER JOIN PTL_PERMISSIONS ON PTL_ROLE_PERMISSIONS.PERMISSION_ID=PTL_PERMISSIONS.ID 
WHERE 
    PEP_USERS.ID=532;
*/

function AddRemoveMultipleInputFields({ onChange }){

    const [selectedValue, setSelectedValue] = useState('');
  const [dropdownData, setDropdownData] = useState([]);

    const [inputFields, setInputFields] = useState([{
        prod_code:'',
        d_rate:'',
        e_qnty:'',
        f_misc: '',
        g_price: ''  
    } ]);
 
    const addInputField = ()=>{

        setInputFields([...inputFields, {
            prod_code:'',
            d_rate:'',
            e_qnty:'',
            f_misc: '',
            g_price: ''   
        } ])
      
    }
 /*   const removeInputFields = (index)=>{
        const rows = [...inputFields];
        rows.splice(index, 1);
        setInputFields(rows);

        onChange={(prod_code) => handleChange({ target: { value: prod_code } }, 'prod_code')}

   }*/

   // Function to handle changes in dropdown selection
  const handleDropdownData = (value) => {
    setSelectedValue(value);
  };

   const handleChange = (index, evnt)=>{
    
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
 console.log(inputFields)
 
}
    return(
    
        <div className="justify-between items-center px-8">
            <div className="row flex justify-between ">
                <div className="justify-between">
                  {
                      inputFields.map((data, index)=>{
                          const {prod_code, d_rate, e_qnty, f_misc, g_price}= data;
                          return(
                            <div className="row my-3 w-full flex justify-between" key={index}>
                    <div className="col">
                    <div className="form-group">
                    <ProdDrop onChange={(prod_code) => handleChange({ target: { value: prod_code } }, 'prod_code')} />
                    <p>{selectedValue}</p>
                    </div>
                    </div>
                    <div className="col">
                    <input type="number" onChange={(evnt)=>handleChange(index, evnt)} value={d_rate} name="d_rate" className="form-control" placeholder="Rate" />
                    </div>
                    <div className="col">
                    <input type="number" onChange={(evnt)=>handleChange(index, evnt)} value={e_qnty} name="e_qnty" className="form-control" placeholder="Quantity" />
                    </div>
                    <div className="col">
                    <input type="number" onChange={(evnt)=>handleChange(index, evnt)} value={f_misc} name="f_misc" className="form-control" placeholder="Misc" />
                    </div>
                    <div className="col">
                    <input type="number" onChange={(evnt)=>handleChange(index, evnt)} value={g_price} name="g_price" className="form-control" placeholder="Price" />
                    </div>
                    {/*}
                    <div className="col">
                

                
                 {(inputFields.length!==1)? <button className="btn btn-outline-danger" onClick={removeInputFields}>Remove</button>:''}
                  
                 
                    </div>
                          */}
                  </div>
                          )
                      })
                  }
     
                <div className="row">
                    <div className="col-sm-12 d-flex flex-row-reverse">

                    <button className="btn btn-outline-success " onClick={addInputField}>Add New</button>
                    </div>
                </div>
                  </div>
                </div>
                <div className="col-sm-4">

                </div>
            </div>
        
    )
}
export default AddRemoveMultipleInputFields