import React, { Component } from 'react';

class Navbar extends Component {

    render() {
        return (
            <div>
                <ul>
                    <li><a class="active" href='/home'>NGOfinder</a></li>
                    <li><a href='/profile'>Profile</a></li>
                    {window.location.pathname === "/" || window.location.pathname === "/login"? <li><a href='/login'>Log In</a></li> : <li><a href='/'>Sign out</a></li>}
                </ul>
            </div>
        )
    }
}
/*
<div data-collapse="medium" data-animation="default" data-duration="400" className="navigation-bar w-nav"
<div className="w-container" >
    <a href="/" className="w-nav-brand w--current">
        <div className="site-name">NGOinder</div>
    </a>
    <nav role="navigation" className="navigation-menu w-nav-menu">
        <a href="/" className="navigation-link w-nav-link w--current">Home</a>
        <a href="/about" className="navigation-link w-nav-link">About</a>
        <a href="/contact" className="navigation-link w-nav-link">Contact</a>
        <a href="/login" className="nav-link-2 w-nav-link">Log In</a></nav>
    <div className="menu-button w-nav-button">
        <div className="w-icon-nav-menu"/>
    </div>
</div>
</div>
*/
export default Navbar;