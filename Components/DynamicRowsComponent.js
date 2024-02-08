import React, { useState } from 'react';

const DynamicRowsComponent = () => {
  const [rows, setRows] = useState([{ id: 1, value: '' }]);

  const handleAddRow = () => {
    const newRow = { id: rows.length + 1, value: '' };
    setRows([...rows, newRow]);
  };

  const handleChange = (id, e) => {
    const updatedRows = rows.map(row =>
      row.id === id ? { ...row, value: e.target.value } : row
    );
    setRows(updatedRows);
  };

  const handleSubmit = () => {
    const rowData = rows.reduce((acc, row) => {
      acc[row.id] = row.value;
      return acc;
    }, {});
    console.log('All Row Data:', rowData);
  };

  return (
    <div>
      {rows.map(row => (
        <div key={row.id}>
          <input
            type="text"
            value={row.value}
            onChange={e => handleChange(row.id, e)}
          />
          <input
            type="text"
            value={row.value}
            onChange={e => handleChange(row.id, e)}
          />
          <input
            type="text"
            value={row.value}
            onChange={e => handleChange(row.id, e)}
          />
        </div>
      ))}
      <button onClick={handleAddRow}>Add Row</button>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default DynamicRowsComponent;
