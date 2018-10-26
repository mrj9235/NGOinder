import React, { Component } from 'react';
import Login from "./Login.js";
import './App.css';

import {
    BrowserRouter,
    Route,
    Link
} from 'react-browser-router';


class App extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <Link to="/">Login</Link>

                <Route path="/" component={Login} />
            </div>
        </BrowserRouter>);
    }
}

export default App;