import React, { Component } from 'react';

class Homepage extends Component{

    render(){
        return(
            <div className="body">
                <div className="display">
                    <div className="liked-NGOs">
                        <h2>liked-NGOs</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="display-NGOs">
                        <h2>display-NGOs</h2>
                        <p>Some text..</p>
                    </div>
                    <div className="messages">
                        <h2>Messages</h2>
                        <p>Some text..</p>
                    </div>
                </div>
            </div>
        )
    }
}
/*
<div className="w-container">
    <form action="/search" className="w-form">
        <input type="search" className="w-input" maxLength="256" name="query" placeholder="Search…" id="search" required=""/>
        <input type="submit" value="Search" className="search-button w-button"/>
    </form>
</div>
<div className="content-wrapper">
    <a href="#" className="link-block w-inline-block"/>
    <h1 className="heading">NGOs of the Day</h1>
</div>
<div className="columns w-row">
    <div className="column-3 w-col w-col-3">
    <h2 className="heading-2">RECOMMENDED</h2>
<ul className="unordered-list">
    <li className="list-item"><a href="#" className="link">Cause Types</a></li>
    <li className="list-item"><a href="#" className="link">Popular </a></li>
    <li className="list-item"><a href="#" className="link">New</a></li>
</ul>
<h2 className="heading-2">BROWSE BY CAUSE TYPE</h2>
<ul className="unordered-list">
    <li className="list-item"><a href="#" className="link">Enviornmental</a></li>
    <li className="list-item"><a href="#" className="link">Health Care</a></li>
    <li className="list-item"><a href="#" className="link">Education</a></li>
    <li className="list-item"><a href="#" className="link">Humanitarian</a></li>
    <li className="list-item"><a href="#" className="link">Public Policy</a></li>
</ul>
</div>
<main id="Main-View" className="column w-col w-col-6">
    <div className="container w-container">
        <div data-animation="slide" data-duration="500" data-infinite="1" className="slider w-slider">
            <div className="w-slider-mask">
                <div className="slide-1 w-slide"></div>
                <div className="slide-2 w-slide"><a href="#" className="link-block w-inline-block"></a>
                </div>
                <div className="slide-3 w-slide"><a href="#" className="link-block w-inline-block"></a>
                </div>
            </div>
            <div className="w-slider-arrow-left">
                <div className="w-icon-slider-left"></div>
            </div>
            <div className="w-slider-arrow-right">
                <div className="w-icon-slider-right"></div>
            </div>
            <div className="w-slider-nav w-round"></div>
        </div>
    </div>
</main>
<div className="column-2 w-col w-col-3"></div>
</div>
<div className="container-2 w-container">
    <h2 className="heading-4">Recommended for You</h2>
    <div data-animation="slide" data-duration="500" data-infinite="1" className="w-slider">
        <div className="w-slider-mask">
            <div className="slide-4 w-slide"></div>
            <div className="slide-5 w-slide"></div>
            <div className="slide-6 w-slide"></div>
            <div className="slide-7 w-slide"></div>
            <div className="slide-8 w-slide"></div>
        </div>
        <div className="w-slider-arrow-left">
            <div className="w-icon-slider-left"></div>
        </div>
        <div className="w-slider-arrow-right">
            <div className="w-icon-slider-right"></div>
        </div>
        <div className="w-slider-nav w-round"></div>
    </div>
    </div>
*/
export default Homepage;