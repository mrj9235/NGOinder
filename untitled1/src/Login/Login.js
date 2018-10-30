import React, { Component } from 'react';

class Login extends Component {

    render() {
        return (
            <div>
                <ul class="list">
                    <li>Sign In</li>
                    <li><input type='text' name='Email' placeholder='Email' /></li>
                    <li><input type='password' name='password' placeholder='Password' /></li>
                    <li><input type='button' name='Submit' value='Submit' /></li>
                    <li>Forget Password?</li>
                </ul>
            </div>
        )
    }
}

export default Login;