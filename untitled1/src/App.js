import React, { Component } from 'react';
import Homepage from "./Homepage/Homepage.js";
import Login from "./Login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import './App.css';
import './Homepage/Homepage.css';
import './Navbar/Navbar.css'
import './Login/Login.css';

import {
    BrowserRouter,
    Route
} from 'react-browser-router';


class App extends Component {
    render() {
        return (<BrowserRouter>
            <div>
                <div class='navbar-header'><h1><Navbar/></h1></div>

                <Route exact path="/" component={Homepage} />
                <Route path='/login' component={Login} />
            </div>
        </BrowserRouter>);
    }
}

export default App;