// DynamicDropdown.js
import React, { useState, useEffect } from 'react';

const DynamicDropdown = ({ apiEndpoint, onSelect }) => {

  

  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch options from the API
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();

        console.log(data.a_email);
        // Extract only the "Category" property from the API response
        const formattedOptions = data.entries.map((entry) => entry.aEmail);
        setOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, [apiEndpoint]); // Run this effect whenever the API endpoint changes

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    onSelect(event.target.value); // Pass the selected value to the parent component
  };

  return (
    <div>
      <select id="dynamic-dropdown" value={selectedOption} onChange={handleSelectChange}>
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div>
          {/* You can display additional information here if needed */}
        </div>
      )}
    </div>
  );
};

export default DynamicDropdown;
