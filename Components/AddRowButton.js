import React from 'react';

// Separate button component to trigger adding a new row
const AddRowButton = ({ onAddRow }) => (
  <button onClick={onAddRow}>Add Row</button>
);

export default AddRowButton;
