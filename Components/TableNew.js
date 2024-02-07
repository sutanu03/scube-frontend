import React, { useState } from 'react';

function TableRow({ index, onAddRow }) {
  const [isEditable, setIsEditable] = useState(false);
  const [newRowValue, setNewRowValue] = useState('');

  const toggleEdit = () => {
    setIsEditable(!isEditable);
  };

  const handleInputChange = event => {
    setNewRowValue(event.target.value);
  };

  const handleAddRow = () => {
    onAddRow(newRowValue);
    setNewRowValue('');
    setIsEditable(false);
  };

  return (
    <tr>
      <td>{index}</td>
      <td>
        {isEditable ? (
          <input
            type="text"
            value={newRowValue}
            onChange={handleInputChange}
          />
        ) : (
          <button onClick={toggleEdit}>Edit</button>
        )}
      </td>
      <td>
        {isEditable ? (
          <button onClick={handleAddRow}>Add Row</button>
        ) : null}
      </td>
    </tr>
  );
}

function TableNew() {
  const [rows, setRows] = useState([]);

  const handleAddRow = value => {
    setRows([...rows, value]);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Data</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row}</td>
              <td></td>
            </tr>
          ))}
          <TableRow index={rows.length + 1} onAddRow={handleAddRow} />
        </tbody>
      </table>
    </div>
  );
}

export default TableNew;
