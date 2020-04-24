import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { Panel , Popover} from 'react-bootstrap';
//,ListGroup, ListGroupItem 
import './ProfileHoverPanel.scss';
import Media from 'react-media';

var yourAccount = [
    {
        path: '/',
        "name":"Profile Settings",
        imagePath : require("../../../images/crossIcon.png")
    },
    {
        path: '/',
        "name":"Create Fav Page",
        imagePath : require("../../../images/crossIcon.png")
    },
    {
        path: '/',
        "name":"Log Out",
        imagePath : require("../../../images/crossIcon.png")
    }
]
var aboutOlympus = [
    {
        path: '/',
        "name":"Terms and Conditions",
        imagePath :""
    },
    {
        path: '/',
        "name":"FAQs",
        imagePath :""
    },
    {
        path: '/',
        "name":"Carrers",
        imagePath :""
    },
    {
        path: '/',
        "name":"Contacts",
        imagePath :""
    }

]

/*

<Panel>
				  	<Panel.Heading>Panel heading</Panel.Heading>
				  	<Panel.Body>Some default panel content here.</Panel.Body>
				  		<ListGroup>
					    	<ListGroupItem>Item 1</ListGroupItem>
					    	<ListGroupItem>Item 2</ListGroupItem>
					    	<ListGroupItem>&hellip;</ListGroupItem>
					  	</ListGroup>
				  	<Panel.Body>Some more panel content here.</Panel.Body>
				</Panel>
*/

class profileHoverPanel extends React.Component {
    render() {
        return (
        	<Fragment>
                <Media
                    query="(max-width: 768px)"
                    render={() => 
                        <div>
                            <YourAccount heading="Your Account" data={yourAccount}/>
                            <YourAccount heading="About olympus" data={aboutOlympus}/>
                        </div>
                    }
                />
                <Media
                    query="(min-width: 768px)"
                    render={() => 
                        <Popover id="popover-positioned-bottom">
                            <YourAccount heading="Your Account" data={yourAccount}/>
                            <YourAccount heading="About olympus" data={aboutOlympus}/>
                        </Popover>
                    }
                />
                
			</Fragment>
        )
    }
};

class YourAccount extends React.Component {
    // constructor(props){
    //     super(props);
    // }
    render(){
        var listItems = this.props.data.map(function(data, index){
            return (
                <div className="leftmenu-details" key={data.name}>
                    <Link to={data.path}> 
                        {
                            data.imagePath && <img src={data.imagePath} alt='' /> 
                        }
                    </Link>
                    <Panel.Body>{data.name}</Panel.Body>
                </div>
            );
        },this);
        return(
            <Fragment>
                <Panel className="profileNavBar">
                  <Panel.Heading>
                    <Panel.Title componentClass="h3" className="main-section-mobile">{this.props.heading}</Panel.Title>
                  </Panel.Heading>
                  {listItems}
                </Panel>
            </Fragment>
        )
    }
}

/*


<li className="nav-item leftmenu-details" key={data.name}  >
                    <Link to={data.path}> 
                        {
                            data.imagePath && <img src={data.imagePath} alt='' /> 
                        }
                    </Link>
                    <span className="nav-link active sideBarTitle1" href="/">{data.name}</span>
                </li>
<div className="main-section-mobile">{this.props.heading}</div>
                {listItems}
*/
export default profileHoverPanel;
