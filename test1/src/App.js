// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import UserList from './UserList';
import ShowUserList from './ShowUserList';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/user-list">User List</Link></li>
          <li><Link to="/show-user-list">Show User List</Link></li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user-list" element={<UserList />} />
        <Route path="/show-user-list" element={<ShowUserList />} />
      </Routes>
    </Router>
  );
}

export default App;