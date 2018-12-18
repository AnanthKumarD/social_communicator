/*
    Author: Ananth Kumar D
    Purpose: Creating a component which will be used for Header Component
*/

import React, { Fragment } from 'react';

import { 
	Row,
    Navbar,
    Image,
    FormGroup,
    FormControl,
    InputGroup,
    Glyphicon,
    Badge,
} from 'react-bootstrap'

//import ProfileHoverPanel from '../popups/profileSettings/ProfileHoverPanel.js'

import NavBarPopup from '../popups/navBarPopOverItem/NavBarPopup.js'
//lg , md , sm ,xs

import './_header.scss';

class Header extends React.Component {
    constructor(){
        super();
        this.state = {
            friendPopup: false,
            messagePopup: false,
            notificationPopup:false,
            searchFieldPopUp:false,
            profileSettings:false
        };
        //this.handleFriendPopupClickEvent = this.handleFriendPopupClickEvent.bind(this);
    };

    
    // handleFriendPopupClickEvent(e){
        
    // }

    handleFriendPopupClickEvent = (param) => {
        // param is the argument you passed to the function
        // e is the event object that returned

        console.log('PARAM',param)
        if(param === "loadFriendContainer"){
            this.setState({
                friendPopup: !this.state.friendPopup ,
                searchFieldPopUp: false,
                messagePopup : false,
                profileSettings: false
            });
        }
        if(param === "loadSearchContainer"){
            this.setState({
                searchFieldPopUp: !this.state.searchFieldPopUp ,
                friendPopup : false,
                messagePopup : false,
                profileSettings: false
            });
        }
        if(param === "loadMessageContainer"){
            this.setState({
                messagePopup: !this.state.messagePopup ,
                friendPopup : false,
                searchFieldPopUp: false,
                profileSettings: false
            });
        }

        if(param === "loadProfileContainer"){
            this.setState({
                profileSettings: !this.state.profileSettings ,
                messagePopup: false ,
                friendPopup : false,
                searchFieldPopUp: false
            });
        }
    };
    render() {
        // let boxClass = ["iconContainer"];
        // console.log(this.state.friendPopup,'this.state.friendPopup',this.state.messagePopup)
        // if(this.state.friendPopup === true) {
        //     boxClass.push('si1');
        // }
        // if(this.state.messagePopup === true) {
        //     boxClass.push('si2');
        // }
        // console.log(boxClass)
        return (
            <Fragment>
			    <Row className="show-grid">
			      	
                    <div className="wholeContainer">
                        <Image  src = "../images/logo.png" 
                            bsStyle = "default" 
                            className = "mainLogo clear" 
                        />

                        <div className="searchContainer">
                            <Navbar.Header className = "navBarTitleAlignment">
                                <Navbar.Brand >
                                    <span className = "navBarTitle">
                                        PROFILE PAGE
                                    </span>
                                </Navbar.Brand>
                                <Navbar.Toggle />
                            </Navbar.Header>
                            <Navbar.Form
                                pullLeft
                                className = "navSearchFiledAlignment">
                                <FormGroup >
                                    <InputGroup >
                                        <FormControl
                                          type = "text"
                                          className = "inputFieldCss"
                                          placeholder = "Search Here People or Pages..."/>
                                        <InputGroup.Addon className="searchIconView">
                                          <Glyphicon glyph="search" className="searchIcon"/>
                                        </InputGroup.Addon>
                                    </InputGroup>
                                    
                                </FormGroup>
                            </Navbar.Form>
                            <a href = "#brand" 
                                  className = "findFriendTextAlignment">
                                FIND FRIENDS
                            </a>
                        </div>
                        <div className="notificationContainer iconDetails">

                            <span className={["iconContainer",this.state.friendPopup,"si1"].join(' ')} onClick={()=>this.handleFriendPopupClickEvent("loadFriendContainer")} >
                                <img src={require('../../images/friendsIcon.png')} alt='' className="socialIcon"/> 
                                <Badge className="badgeAlignment">15</Badge>
                            </span>
                              
                            <span className={["iconContainer",this.state.messagePopup,"si2"].join(' ')} onClick={()=>this.handleFriendPopupClickEvent("loadMessageContainer")}>
                                <img src={require('../../images/messageIcon.ico')} alt='' className="socialIcon"/>
                                <Badge className="badgeAlignment">45</Badge>
                            </span>

                            <span className="iconContainer">
                                <img src={require('../../images/notificationIcon.png')} alt='' className="socialIcon"/>
                                <Badge className="badgeAlignment">4</Badge>
                            </span>

                            <Glyphicon glyph="search" className="iconContainer searchIcon1" onClick={()=>this.handleFriendPopupClickEvent("loadSearchContainer")}/>
                            
                            <span className="iconContainer profileIconDetails" onClick={()=>this.handleFriendPopupClickEvent("loadProfileContainer")}>
                                <img src={require('../../images/author-page.jpg')} alt='' 
                                    className="profileIcon" />
                                    
                            </span>

                            <span className="author-title" onClick={()=>this.handleFriendPopupClickEvent("loadProfileContainer")}>
                                James Spiegel <i className="arrow down"></i> <br/>
                                <span className="autherSubTitle">Space Cowboy </span>
                            </span>

                        </div>

                        <Image src={require('../../images/messageIcon.ico')}
                            bsStyle = "default" 
                            className = "chatIcon clear"
                        />
                    </div>
					
			    </Row>
                <div className="containerToLoad">
                    <Row>
                        { this.state.searchFieldPopUp &&
                            <FormGroup >
                                <InputGroup >
                                    <FormControl
                                      type = "text"
                                      className = "inputFieldCss"
                                      placeholder = "Search Here People or Pages..."/>
                                    
                                </InputGroup>
                                
                            </FormGroup> 
                        }
                    </Row>

                    <Row>
                        { this.state.friendPopup && 
                            <NavBarPopup 
                                heading="FRIEND REQUESTS"
                                title="Find Friends"
                                settings="Settings"
                                buttonColor="#38a9ff"
                                buttonText="Check All Events"
                            /> }
                    </Row>


                   

                    
                </div>
                
            </Fragment>
        );
    }
}

/*
 <Row>
                        { this.state.profileSettings && 
                            <ProfileHoverPanel 
                            /> }
                    </Row>
*/


export default Header;