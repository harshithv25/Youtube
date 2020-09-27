import React from 'react'
import './SearchPage.css';
import TuneRoundedIcon from '@material-ui/icons/TuneRounded';
import ChannelRow from './ChannelRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneRoundedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image='https://yt3.ggpht.com/a/AATXAJyzyrPJMwSCUxtTlY-MQ9sEqX8XHm8MYq4yr7e6Gw=s176-c-k-c0x00ffffff-no-rj-mo'
                channel='Netflix'
                verified={true}
                subs='42.6 M'
                noOfVideos='☯'
                description='Netflix And Chill!!!!'
            />
        </div>
    )
}

export default SearchPage
