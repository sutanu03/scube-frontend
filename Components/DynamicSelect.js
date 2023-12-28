// DynamicSelect.js

import React, { useState, useEffect } from 'react';

const DynamicSelect = ({ apiUrl, onSelectChange }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch options from the backend API
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => setOptions(data))
      .catch(error => console.error('Error fetching options:', error));
  }, [apiUrl]);

  const handleSelectChange = event => {
    const selectedValue = event.target.value;
    setSelectedOption(selectedValue);

    // Notify parent component about the selected option
    onSelectChange(selectedValue);
  };

  return (
    <select value={selectedOption} onChange={handleSelectChange}>
      <option value="" disabled>Select an option</option>
      {options.map(option => (
        <option key={option.id} value={option.id}>
          {option.name}
        </option>
      ))}
    </select>
  );
};

export default DynamicSelect;
