import React, { Component } from 'react';
import Homepage from "./Homepage/Homepage.js";
import Login from "./Login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import './App.css';
import './Homepage/Homepage.css';
import './'

import {
    BrowserRouter,
    Route,
    Link
} from 'react-browser-router';


class App extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <Navbar />

                <Route path="/" component={Homepage} />
                <Route path='/login' component={Login} />
            </div>
        </BrowserRouter>);
    }
}

export default App;