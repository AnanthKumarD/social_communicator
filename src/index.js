import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/popper.js/dist/umd/popper.js';
import '../node_modules/bootstrap/dist/js/bootstrap';
import App from './App';
import './sass/main.scss';
//import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers/rootReducer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import * as aboutActions from './actions/aboutActions';
import * as friendsActions from './actions/friendsActions';
import * as photoAlbumAction from './actions/photoAlbumAction';
import * as videoAlbumAction from './actions/videoAlbumAction';


import { HashRouter, Switch } from 'react-router-dom';
// import createBrowserHistory from "history/createBrowserHistory";

//const customHistory = createBrowserHistory();

const store = createStore(rootReducer);
store.dispatch(aboutActions.getAbout());
store.dispatch(friendsActions.getFriends());
store.dispatch(photoAlbumAction.photoAlbumAction());
store.dispatch(videoAlbumAction.videoAlbumAction());

ReactDOM.render( <
        Provider store = { store } >
        <
        HashRouter >
        <
        Switch >
        <
        App / >
        <
        /Switch> <
        /HashRouter> <
        /Provider>	, document.getElementById('root'));

        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
        // Learn more about service workers: http://bit.ly/CRA-PWA