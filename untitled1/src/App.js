import React, { Component } from 'react';
import Homepage from "./Homepage/Homepage.js";
import Login from "./Login/Login.js";
import Navbar from "./Navbar/Navbar.js";
import Profile from "./Profile/Profile";
import List from "./List/List.js";
import './App.css';
import './Homepage/Homepage.css';
import './Profile/Profile.css';
import './List/List.css';

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
                <Route path='/list' component={List}/>
            </div>
        </BrowserRouter>);
    }
}

export default App;