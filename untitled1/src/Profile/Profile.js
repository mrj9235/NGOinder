import React, { Component } from 'react';

class Profile extends Component{


    onOptionClick(){
        document.getElementById('options').hidden = false;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;
        document.getElementsByTagName('input').item(0).type = 'hidden';
        document.getElementsByTagName('input').item(1).type = 'hidden';
        document.getElementsByTagName('input').item(2).type = 'hidden';
        document.getElementsByClassName('option-button').item(3).hidden = true;

    };

    onPasswordClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = false;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;
        document.getElementsByTagName('input').item(0).type = 'text';
        document.getElementsByTagName('input').item(1).type = 'text';
        document.getElementsByTagName('input').item(2).type = 'text';
        document.getElementsByClassName('option-button').item(3).hidden = false;
    };

    onLikedClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = false;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;
        document.getElementsByTagName('input').item(0).type = 'hidden';
        document.getElementsByTagName('input').item(1).type = 'hidden';
        document.getElementsByTagName('input').item(2).type = 'hidden';
        document.getElementsByClassName('option-button').item(3).hidden = true;

    };

    onDeactivateClick() {
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = false;
        document.getElementById('accounts').hidden = true;
        document.getElementsByTagName('input').item(0).type = 'hidden';
        document.getElementsByTagName('input').item(1).type = 'hidden';
        document.getElementsByTagName('input').item(2).type = 'hidden';
        document.getElementsByClassName('option-button').item(3).hidden = true;

    };

    onAccountsClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = false;
        document.getElementsByTagName('input').item(0).type = 'hidden';
        document.getElementsByTagName('input').item(1).type = 'hidden';
        document.getElementsByTagName('input').item(2).type = 'hidden';
        document.getElementsByClassName('option-button').item(3).hidden = true;

    };


    render(){
        return(
            <div className='body'>
                <div className='sub-header'>
                    <button className='sub-head-button' onClick={this.onOptionClick}>Options</button>
                    <button className='sub-head-button' onClick={this.onPasswordClick}>Password</button>
                    <button className='sub-head-button' onClick={this.onLikedClick}>Liked</button>
                    <button className='sub-head-button' onClick={this.onDeactivateClick}>Deactivate</button>
                    <button className='sub-head-button' onClick={this.onAccountsClick}>Linked Accounts</button>
                </div>
                <div id='main-page'>
                    <div id='settings'>
                        <div id='options' hidden={false}>
                            Preferences:
                            <br/>
                            <br/>
                            <div className='option'> Language </div>
                            <div className='option'> Notifications </div>
                            <div className='option'> Display </div>
                            <div className='option'> Privacy </div>
                            <div className='option'> Media </div>
                            <div className='option'> Link Options </div>
                            <div className='option'> Messaging </div>
                            <div className='option'> Payment </div>

                            <div className='buttons'>
                                <button className='option-button'>Reset to Default</button>
                                <button className='option-button'>Undo</button>
                                <button className='option-button'>Save Changes</button>
                            </div>
                        </div>
                        <div id='password' hidden={true}>
                            <input type='hidden' placeholder='Enter Old Password'/>
                            <input type='hidden' placeholder='Enter New Password'/>
                            <input type='hidden' placeholder='Confirm New Password'/>
                            <button className='option-button' hidden={true}>Update Password</button>
                        </div>
                        <div id='liked' hidden={true}>
                            <h2>Previously Liked NGOs:</h2>
                            <br/>
                            <br/>
                            <img className='liked-img' src={require('../images/images.png')}/>
                            <img className='liked-img' src={require('../images/abstract-white-pigeon-and-hand.png')}/>
                            <img className='liked-img' src={require('../images/charity-logo-with-human-icons_1025-131.jpg')}/>
                            <img className='liked-img' src={require('../images/NGO logo.png')}/>
                        </div>
                        <div id='deactivate' hidden={true}>
                            <h3>Please don't deactivate your account</h3>
                            <button>Deactivate</button>
                        </div>
                        <div id='accounts' hidden={true}>
                            <h3>Link Social Medias!</h3>
                            <a  href="https://www.facebook.com" target="_blank" ><img className='media-link' src={require('../images/facebook.png')}/></a>
                            <a  href="https://www.gmail.com" target="_blank"> <img className='media-link' src={require('../images/email.png')}/></a>
                            <a  href="https://www.instagram.com" target="_blank" ><img  className='media-link' src={require('../images/instagram.png')}/></a>
                        </div>
                    </div>
                    <div id='extra-info'>
                        <div id='news'>
                            <h3 id='news-head'>News</h3>
                            <a className='news-link' href='/profile'>Look at this beautiful news story</a>
                            <br/><br/>
                            <a className='news-link' href='/profile'>Look at this beautiful news story</a>
                            <br/><br/>
                            <a className='news-link' href='/profile'>Look at this beautiful news story</a>
                            <br/><br/>
                            <a className='news-link' href='/profile'>Look at this beautiful news story</a>
                            <br/><br/>
                            <a className='news-link' href='/profile'>Look at this beautiful news story</a>
                            <br/><br/>
                        </div>
                        <div id='messages'>
                            <h3 id='message-head'>Messages</h3>

                            <div className='message'>
                                <img className='message-img' src={require('../images/images.png')}/>
                                <p>Hello! Thank you for liking our NGO!</p>
                            </div>
                            <br/>
                            <div className='message'>
                                <img className='message-img' src={require('../images/abstract-white-pigeon-and-hand.png')}/>
                                <p>Hello! Thank you for donating to...</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default Profile;
