import React from 'react'
import './ChannelRow.css'
import { Avatar, Button } from '@material-ui/core'
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';

function ChannelRow({ image, channel, noOfVideos, description, verified = false, subs }) {
    return (
        <div className="channelRow">
            <Avatar src={image} className='channelRow__logo' />
            <div className="channelRow__text">
                <h4>{channel} {verified && <CheckCircleRoundedIcon className="channelRow__verified" />}</h4>
                <p>{subs} subscribers   •   {noOfVideos} videos</p>
                <p>{description}</p>
            </div>
            <div className="channelRow__subs">
                <Button>Subscribe</Button>
            </div>
        </div>
    )
}

export default ChannelRow
