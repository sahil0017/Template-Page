import { Avatar } from '@material-ui/core'
import React from 'react'
import "./VideoCard.css";

function VideoCard(props) {
    const {thumbnail , user , info , views , timestamp} = props
    return (
        <div className="videocard">
            <img src={thumbnail} alt="Thumbnail"  className="thumbanil"/>
            <div className="user__info">
                <Avatar src={user} alt="User" className="user__image" />
                <div className="description">
                    <h2>{info}</h2>
                    <span>{views} </span>
                    <span>{timestamp}</span>
                </div>
            </div> 
            
        </div>
    )
}

export default VideoCard
