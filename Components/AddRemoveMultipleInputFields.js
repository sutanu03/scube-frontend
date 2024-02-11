import React, { useState } from "react";
import ProdDrop from "@/Components/ProdDrop";

function AddRemoveMultipleInputFields({ onChange, updateQuotationDetail }) {
  const [inputFields, setInputFields] = useState([
    { prod_code: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
  ]);

  const addInputField = () => {
    setInputFields([
      ...inputFields,
      { prod_code: "", d_rate: "", e_qnty: "", f_misc: "", g_price: "" }
    ]);
  };

  const handleChange = (index, evnt) => {
    const { name, value } = evnt.target;
    const list = [...inputFields];
    list[index][name] = value;
    setInputFields(list);
    updateQuotationDetail(list); // Call the function to update quotationDetail
  };

  return (
    <div className="justify-between items-center px-8">
      <div className="row flex justify-between">
        {inputFields.map((data, index) => {
          const { prod_code, d_rate, e_qnty, f_misc, g_price } = data;
          return (
            <div className="row my-3 w-full flex justify-between" key={index}>
              <div className="col">
                <div className="form-group">
                  <ProdDrop
                    onChange={(prod_code) =>
                      handleChange(index, { target: { value: prod_code } })
                    }
                  />
                </div>
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={d_rate}
                  name="d_rate"
                  className="form-control"
                  placeholder="Rate"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={e_qnty}
                  name="e_qnty"
                  className="form-control"
                  placeholder="Quantity"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={f_misc}
                  name="f_misc"
                  className="form-control"
                  placeholder="Misc"
                />
              </div>
              <div className="col">
                <input
                  type="number"
                  onChange={(evnt) => handleChange(index, evnt)}
                  value={g_price}
                  name="g_price"
                  className="form-control"
                  placeholder="Price"
                />
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
