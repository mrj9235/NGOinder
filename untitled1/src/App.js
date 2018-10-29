import React, { Component } from 'react';
import Homepage from "./Homepage/Homepage.js";
import Login from "./Login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import Profile from "./Profile/Profile";
import './App.css';
import './Homepage/Homepage.css';
import './Profile/Profile.css';
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
                <Route exact path="/" component={Homepage} />
                <Route path='/login' component={Login} />
                <Route path='/profile' component={Profile}/>
            </div>
        </BrowserRouter>);
    }
}

export default App;