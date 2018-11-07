import React, { Component } from 'react';
import Profile from "../Profile/Profile";
import {Route} from "react-browser-router";

class Login extends Component {

    render() {
        return (
            <div>
                <ul class="list">
                    <li>Sign In</li>
                    <li><input type='text' name='Email' placeholder='Email' /></li>
                    <li><input type='password' name='password' placeholder='Password' /></li>
                    <li><a type='button' className='submit' href='/home'>Submit</a></li>
                    <li className='highlight'>Forget Password?</li>
                    <li className='highlight'>Need to Register?</li>
                </ul>
            </div>
        )
    }
}

export default Login;