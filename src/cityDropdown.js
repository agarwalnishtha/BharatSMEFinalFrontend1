import React, { useState, useEffect } from 'react';

const CityDropdown = ({ onSelectCity }) => {
    const [cities, setCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [district, setDistrict] = useState('');
  
    // Function to fetch cities
    const fetchCities = async () => {
      try {
        // Dummy data - replace with actual API call
        const response = await fetch('https://indian-cities-api-nocbegfhqg.now.sh/cities'); // Replace '/api/cities' with your actual API endpoint
        const data = await response.json();
        const sortedCities = data.sort(); // Sorting cities alphabetically
        console.log(data);
        setCities(sortedCities);
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
  
    // Fetch cities on component mount
    useEffect(() => {
      fetchCities();
    }, []);
  
    // Function to handle city selection
    const handleCityChange = (event) => {
      const selectedCity = event.target.value;
      setSelectedCity(selectedCity);
      onSelectCity(selectedCity); // Pass selected city to the parent component
    };
  
    return (
        <div>
          <label htmlFor="city">Select a city:</label>
          <select id="city" value={selectedCity} onChange={handleCityChange}>
            <option value="">--Select a city--</option>
            {cities.map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>
      );
    };
  
  export default CityDropdown;