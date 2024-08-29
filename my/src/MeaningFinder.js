import React, { useState } from 'react';

const MeaningFinder = () => {
    const [inputValue, setInputValue] = useState('');
    const [error, setError] = useState(null);
    const [apiResponse, setApiResponse] = useState(null);

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
        setError(null); 
    };

    const handleButtonClick = () => {
        if (inputValue.trim() === '') {
            setError('Please enter a name.');
            return;
        }

        fetch(`https://api.agify.io/?name=${inputValue}`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                setApiResponse(data);
                setError(null); 
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError('Failed to fetch data. Please try again later.');
            });
    };

    return (
        <div>
            <h1>Meaning Finder</h1>
            <input 
                type="text" 
                value={inputValue} 
                onChange={handleInputChange} 
                placeholder="Enter a name" 
            />
            <button onClick={handleButtonClick}>Submit</button>
            
            {error && <p style={{ color: 'red' }}>{error}</p>}
            {apiResponse && <p>Response: {JSON.stringify(apiResponse)}</p>}
        </div>
    );
};

export default MeaningFinder;
