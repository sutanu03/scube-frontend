import React, { useState } from "react";
import ProdDrop from "@/Components/ProdDrop";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

function AddRemoveMultipleInputFields({ onChange, updateQuotationDetail }) {
  const [inputFields, setInputFields] = useState([
    { product: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      { product: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
    ]);
  };

  const deleteInputField = (index) => {
    if (inputFields.length === 1) {
      // If there's only one row, prevent deletion
      return;
    }
    const list = [...inputFields];
    list.splice(index, 1);
    setInputFields(list);
    updateQuotationDetail(list);
  };

  const handleChange = (index, fieldName, value) => {
    const list = [...inputFields];
    list[index][fieldName] = value;

    // Calculate g_price dynamically
    const { d_rate, e_qnty, f_misc } = list[index];
    const calculatedPrice = parseFloat(d_rate) * parseFloat(e_qnty) + parseFloat(f_misc);
    list[index]["g_price"] = isNaN(calculatedPrice) ? "" : calculatedPrice;

    setInputFields(list);
    updateQuotationDetail(list);
  };

  return (
    <div className="justify-between items-center px-8 w-full">
      <div className="absolute flex px-20 gap-44 text-black font-semibold w-full py-1 mb-2">
              <h2>Product Code</h2>
              <h2>Unit Price</h2>
              <h2 className='px-4'>Quantity</h2>
              <h2 className='px-4'>Misc</h2>
              <h2 >Price</h2>
                <button className="btn btn-success h-8 ml-[150px]" onClick={addInputField}>
                  <IoMdAddCircle/>
                </button>
      </div>
      
        <br/>
      <div className="row flex justify-between">
        {inputFields.map((data, index) => {
          const { product, d_rate, e_qnty, f_misc, g_price } = data;
          return (
            <>
            <div className="row my-1 w-full flex justify-between" key={index}>
              
              <div className="col">
                <div className="form-group">
                  <ProdDrop
                    onChange={(product) => handleChange(index, "product", product)}
                  />
                </div>
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "d_rate", evnt.target.value)}
                  value={d_rate}
                  name="d_rate"
                  className="form-control"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "e_qnty", evnt.target.value)}
                  value={e_qnty}
                  name="e_qnty"
                  className="form-control"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "f_misc", evnt.target.value)}
                  value={f_misc}
                  name="f_misc"
                  className="form-control"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  value={g_price}
                  name="g_price"
                  className="form-control"
                  readOnly // Make it read-only
                  required
                />
              </div>
              <div className="col">
                {index !== 0 && ( // Render delete button for all rows except the first one
                  <button className="btn btn-danger flex" onClick={() => deleteInputField(index)}>
                    <MdDelete/>
                  </button>
                )}
              </div>
              
            </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default AddRemoveMultipleInputFields;
