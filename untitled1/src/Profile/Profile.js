import React, { Component } from 'react';

class Profile extends Component{


    onOptionClick(){
        document.getElementById('options').hidden = false;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;
    };

    onPasswordClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = false;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;

    };

    onLikedClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = false;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = true;
    };

    onDeactivateClick() {
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = false;
        document.getElementById('accounts').hidden = true;
    };

    onAccountsClick(){
        document.getElementById('options').hidden = true;
        document.getElementById('password').hidden = true;
        document.getElementById('liked').hidden = true;
        document.getElementById('deactivate').hidden = true;
        document.getElementById('accounts').hidden = false;
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

                <div id='options' hidden={false}>Look at this options page</div>
                <div id='password' hidden={true}>Look at this password page</div>
                <div id='liked' hidden={true}>Look at this liked page</div>
                <div id='deactivate' hidden={true}>Look at this decativation page</div>
                <div id='accounts' hidden={true}>Look at this account page</div>
            </div>
        )
    }

}

export default Profile;
