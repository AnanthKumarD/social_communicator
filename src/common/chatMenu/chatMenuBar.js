import React, { Fragment } from 'react';

import './chatMenuBar.scss';

// FormGroup,
//     FormControl,
//     InputGroup,
//     Glyphicon,
//     Badge,
//     Navbar,
import {
    Row,
    Image,

} from 'react-bootstrap';
import ChatViewComponent from '../popups/chatView/ChatViewComponent.js';


const leftSidebarRoutes = [
    { path: '/', exact: true, name: 'Caroll Summers', component: "Header", imagePath: require("../../images/avatar67-sm.jpg") },
    { path: '/', exact: true, name: 'Mathilda Blinker', component: "Header", imagePath: require("../../images/avatar62-sm.jpg") },
    { path: '/', exact: true, name: 'Micheal Maximoff', component: "Header", imagePath: require("../../images/avatar68-sm.jpg") },
    { path: '/', exact: true, name: 'Jr Caroll Summers', component: "Header", imagePath: require("../../images/avatar69-sm.jpg") },
    { path: '/', exact: true, name: 'Rachell Howlet', component: "Header", imagePath: require("../../images/avatar70-sm.jpg") }
];

class chatMenuBar extends React.Component {
    constructor() {
        super();
        this.state = {
            defaultSidebarOpenStatus: false,
            routeData: leftSidebarRoutes
        }
    }

    render() {
        return ( <
            Fragment >
            <
            div fluid className = "alignChatMenu" >
            <
            SideBarRendering listData = { this.state.routeData }
            /> <
            Image src = { require('../../images/messageIcon.ico') }
            bsStyle = "default"
            className = "chatIcon1 clear"
            onClick = {
                () => this.handleFriendPopupClickEvent("loadChatContainer")
            }
            /> < /
            div >

            <
            /Fragment>
        )
    }
};


class SideBarRendering extends React.Component {

    constructor(props) {
            super(props);
            this.state = {
                    addClass: false,
                    loadChatContainer: false
                }
                //this.handleFriendPopupClickEvent = this.handleFriendPopupClickEvent.bind(this)
        }
        //handleFriendPopupClickEvent(i) {
    handleFriendPopupClickEvent = (param) => {
        console.log(param, '>>>>>>')
        if (param === "loadChatContainer") {
            this.setState({
                loadChatContainer: !this.state.loadChatContainer,
            });
        }

    }

    render() {
        let boxClass = ["sidebar1"];
        if (this.state.addClass) {
            boxClass.push('green1');
        }
        var listItems = this.props.listData.map(function(data, index) {
            return ( <
                li className = "nav-item leftmenu1"
                key = { data.name }
                onClick = { this.handleFriendPopupClickEvent.bind(null, "loadChatContainer", index) } >
                <
                img src = { data.imagePath }
                alt = '' / > {
                    this.state.addClass &&
                    <
                    span className = "nav-link active sideBarTitle1"
                    href = "/" > { data.name } < /span>
                } <
                /li>
            );
        }, this);

        return ( <
            Fragment >

            <
            div className = { boxClass.join(' ') } >
            <
            ul className = "nav flex-column leftMenuDetails1" >
            <
            li className = "chatBoxTopSpace" > < /li> { listItems } < /
            ul >

            <
            /div> <
            Row > {
                this.state.loadChatContainer &&
                <
                ChatViewComponent / >
            } <
            /Row> 

            <
            /Fragment>
        );
    }
};
//onClick={this.handleClick.bind(null,index)}
export default chatMenuBar;