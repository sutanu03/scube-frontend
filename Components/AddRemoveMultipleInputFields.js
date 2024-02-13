import React, { useState } from "react";
import ProdDrop from "@/Components/ProdDrop";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";

function AddRemoveMultipleInputFields({ onChange, updateQuotationDetail }) {
  const [inputFields, setInputFields] = useState([
    { product: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
  ]);

  const addInputField = (e) => {
    // Prevent form submission
    e.preventDefault();

    // Check if the previous row is completely filled
    const previousRow = inputFields[inputFields.length - 1];
    const isPreviousRowFilled = Object.values(previousRow).every(value => value !== "");
    
    // If the previous row is filled, add a new row; otherwise, show a message or prevent adding
    if (isPreviousRowFilled) {
      setInputFields([
        ...inputFields,
        { product: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
      ]);
    } else {
      alert("Please fill the previous row first.");
      // You can also show a message in your UI or take any other action here
    }
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
    <div className="w-full">
      <div className="fixed flex w-full text-black bg-slate-200 font-semibold align-middle items-center">
              <h2 className="w-[10%] ml-4">Product Code</h2>
              <h2 className="w-[29%] text-center">Product Description</h2>
              <h2 className='w-[10%] text-center ml-12'>Unit Price</h2>
              <h2 className='w-[10%] text-center ml-8'>Quantity</h2>
              <h2 className='w-[10%] text-center ml-8'>Misc</h2>
              <h2 className='w-[10%] text-center px-16'>Discount</h2>
              <h2 className='w-[15%] text-center'>Price</h2>
              <div className=" flex w-[5%] flex-row-reverse">
              <button className="btn btn-success h-8" onClick={addInputField}>
                  <IoMdAddCircle/>
                </button>
              </div>
                
      </div>
      
        <br/>
      <div className="row flex justify-between mt-2">
        {inputFields.map((data, index) => {
          const { product, d_rate, e_qnty, f_misc, g_price } = data;
          return (
            <div className="row my-1 w-full flex justify-between" key={index}>
              <div className="flex justify-between w-full align-middle items-center">
              <div className="w-[8%] ml-1">
                <div className="form-group">
                  <ProdDrop
                    onChange={(product) => handleChange(index, "product", product)}
                    required
                  />
                </div>
              </div>
              <div className="w-[30%]">
                <input
                  type="text"
                  name="description"
                  className="form-control"
                  readOnly
                />
              </div>
              <div className="w-[10%]">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "d_rate", evnt.target.value)}
                  value={d_rate}
                  name="d_rate"
                  min="99" max="99999"
                  className="form-control text-right"
                  required
                />
              </div>
              <div className="w-[10%]">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "e_qnty", evnt.target.value)}
                  value={e_qnty}
                  name="e_qnty"
                  min="1" max="9999"
                  className="form-control text-right"
                  required
                />
              </div>
              
              <div className="w-[10%]">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, "f_misc", evnt.target.value)}
                  value={f_misc}
                  name="f_misc"
                  min="0" max="99999"
                  className="form-control text-right"
                  required
                />
              </div>
              <div className="w-[10%]">
                <input
                  type="number"
                  name="discount"
                  min="0" max="99999"
                  className="form-control text-right"
                  readOnly
                />
              </div>
              <div className="w-[10%]">
                <input
                  type="number"
                  value={g_price}
                  name="g_price"
                  className="form-control text-right"
                  readOnly // Make it read-only
                  required
                />
              </div>
              <div className="w-[3%] flex items-end justify-end">
                {index !== 0 && ( // Render delete button for all rows except the first one
                  <button className="btn btn-danger" onClick={() => deleteInputField(index)}>
                    <MdDelete/>
                  </button>
                )}
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AddRemoveMultipleInputFields;
