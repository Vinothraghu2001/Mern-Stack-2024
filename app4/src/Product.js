import React, { useEffect } from 'react';

const Product = () => {
    useEffect(() => {
        fetch('https://api.restful-api.dev/objects')
            .then(response => response.json())
            .then(data => {
                data.forEach(item => {
                    console.log(item.name);
                });
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Product Page</h1>
            <p>Check the console for the product names.</p>
        </div>
    );
};

export default Product;
