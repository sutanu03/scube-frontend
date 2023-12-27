import React, { useState } from 'react';

// Child component representing a single table row
const TableRow = ({ rowData }) => (
  <tr>
    <td>{rowData.itemCode}</td>
    <td>{rowData.description}</td>
    <td>{rowData.rate}</td>
    <td>{rowData.miscCost}</td>
    <td>{rowData.quantity}</td>
    <td>{rowData.price}</td>
    <td>{rowData.discount}</td>
    <td>{rowData.finalPrice}</td>
  </tr>
);

// Parent component holding the state and rendering the table
const TableComponent = () => {
  const [tableData, setTableData] = useState([]);

  const addRow = () => {
    const newRow = {
      itemCode: 'New Code',
      description: 'New Description',
      rate: 0,
      miscCost: 0,
      quantity: 0,
      price: 0,
      discount: 0,
      finalPrice: 0,
    };

    setTableData([...tableData, newRow]);
  };

  return (
    <div>
      <button onClick={addRow}>Add Row</button>
      <table>
        <thead>
          <tr>
            <th>Item Code</th>
            <th>Description</th>
            <th>Rate</th>
            <th>Misc Cost</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Discount(%)</th>
            <th>Final Price</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((rowData, index) => (
            <TableRow key={index} rowData={rowData} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableComponent;
