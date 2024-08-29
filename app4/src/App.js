// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Product from './Product';
import UserList from './UserList';

function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><Link to="/">Product</Link></li>
                        <li><Link to="/users">User List</Link></li>
                    </ul>
                </nav>

                <Switch>
                    <Route path="/" exact component={Product} />
                    <Route path="/users" component={UserList} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
