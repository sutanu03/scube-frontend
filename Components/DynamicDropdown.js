import React, { useState, useEffect } from 'react';

const DynamicDropdown = ({ apiEndpoint }) => {
  const [options, setOptions] = useState([]);
  const [selectedOption, setSelectedOption] = useState('');

  useEffect(() => {
    // Fetch options from the API
    const fetchOptions = async () => {
      try {
        const response = await fetch(apiEndpoint);
        const data = await response.json();
        // Extract only the "Category" property from the API response
        const formattedOptions = data.entries.map(entry => entry.Category);
        setOptions(formattedOptions);
      } catch (error) {
        console.error('Error fetching options:', error);
      }
    };

    fetchOptions();
  }, [apiEndpoint]); // Run this effect whenever the API endpoint changes

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <select
        id="dynamic-dropdown"
        value={selectedOption}
        onChange={handleSelectChange}
      >
        <option value="">Select an option</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
      {selectedOption && (
        <div>
         {/*} <p>You selected: {selectedOption}</p>*/}
          {/* You can display additional information here if needed */}
        </div>
      )}
    </div>
  );
};

export default DynamicDropdown;
