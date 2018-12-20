import React, { Fragment } from 'react';
import { Route, Switch , Redirect} from 'react-router-dom';
import './App.scss';


import Profile from './component/profileComp/ProfileComp';
import Header  from './common/header/Header.js';
import LeftSideBarMenu  from './common/leftSideBarMenu/LeftSideBarMenu.js';
import ChatMenuBar  from './common/chatMenu/chatMenuBar.js';

import FriendsGallery from './component/friends/FriendsGallery';
import PhotosGallery from './component/photosComp/PhotosGallery';
import VideosGallery from './component/videos/VideosGallery';


const AppRouter = () => (
  <Fragment>
      <Header />
      <LeftSideBarMenu />
      <ChatMenuBar />
        <Switch>
          <Route exact path="/" render={() => (
              <Redirect to="/profile"/>
          )}/>
   
          <Route path="/" exact name="Home" component={Profile} />
          <Route path="/profile"  name="Home1" component={Profile} />
          <Route path="/friendsList" name="FriendsGallery" component={FriendsGallery} />
          <Route path="/photosList" name="PhotosGallery" component={PhotosGallery} />
          <Route path="/videosList" name="VideosGallery" component={VideosGallery} />
        </Switch>
  </Fragment>
);


export default AppRouter;
