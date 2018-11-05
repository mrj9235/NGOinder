import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><a className="active" href='/'>Home</a></li>
                    <li><a href='/contact'>Contact</a></li>
                    <li><a href='/about'>About</a></li>
                    {window.location.pathname === "/" || window.location.pathname === "/login" ?
                        <li><a href='/login'>Log In</a></li> : <li><a href='/'>Sign out</a></li>}

                </ul>
            </div>
        )
    }
}

export default Navbar;