import React from 'react';
import VideoModal from './VideoModal';
// import { Player, BigPlayButton } from 'video-react';

import './video.scss'
const Video = (props) => {
    return (
        <div className=" col-4-width photo-album-item-wrap">
            <div className="photo-album-item">
                <a href="/" data-toggle="modal" data-target={"#myModal"+props.idVideo}>
                    <img className = "test-hover1" src={props.path} alt="Italian Trulli" />
                    
                    
                    <div className="image-content-video">
                        <span className="image-content-more">More</span>
                    </div>
                </a>    
                <VideoModal modalId={"myModal"+props.idVideo}/>
            </div>
            <div className= 'imgFooter'> 
                <h5>{props.title}</h5>
                <span>Last Added: {props.published}</span>
                <br/>
                
                <br/>
                
            </div> 
        </div>
        
       
    );
};

//<BigPlayButton position="center" />

export default Video;