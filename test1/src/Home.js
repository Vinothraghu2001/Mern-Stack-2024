import React from 'react';

const Home = () => {
  const containerStyle = {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  };

  const headerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  };

  const h1Style = {
    margin: '0',
    fontSize: '2.5em',
    color: '#343a40',
  };

  const pStyle = {
    margin: '10px 0 0',
    fontSize: '1.2em',
    color: '#6c757d',
  };

  return (
    <div style={containerStyle}>
      <header style={headerStyle}>
        <h1 style={h1Style}>Welcome to My Website</h1>
        <p style={pStyle}>Simple and elegant homepage</p>
      </header>
    </div>
  );
};

export default Home;