import React, { useState } from "react";
import ProdDrop from "@/Components/ProdDrop";

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
    <div className="justify-between items-center px-8">
      <div className="row flex justify-between">
        {inputFields.map((data, index) => {
          const { product, d_rate, e_qnty, f_misc, g_price } = data;
          return (
            <div className="row my-3 w-full flex justify-between" key={index}>
              <div className="col">
                <div className="form-group text-start">
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
                  placeholder="Rate"
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
                  placeholder="Quantity"
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
                  placeholder="Misc"
                  required
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  value={g_price}
                  name="g_price"
                  className="form-control"
                  placeholder="Price"
                  readOnly // Make it read-only
                  required
                />
              </div>
              <div className="col">
                {index !== 0 && ( // Render delete button for all rows except the first one
                  <button className="btn btn-danger" onClick={() => deleteInputField(index)}>
                    X
                  </button>
                )}
              </div>
            </div>
          );
        })}
        <div className="row">
          <div className="col-sm-12 d-flex flex-row-reverse">
            <button className="btn btn-outline-success" onClick={addInputField}>
              Add New
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddRemoveMultipleInputFields;
