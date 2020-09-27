import React from 'react';
import './Sidebar.css';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import ShopTwoIcon from '@material-ui/icons/ShopTwo';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import YouTubeIcon from '@material-ui/icons/YouTube';
import SettingsIcon from '@material-ui/icons/Settings';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import LocalMoviesIcon from '@material-ui/icons/LocalMovies';
import LiveTvIcon from '@material-ui/icons/LiveTv';
import EmojiObjectsIcon from '@material-ui/icons/EmojiObjects';
import FlagIcon from '@material-ui/icons/Flag';
import HelpIcon from '@material-ui/icons/Help';
import FeedbackIcon from '@material-ui/icons/Feedback';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar">
            {/* <h2>Sidebar</h2> */}

            <SidebarRow selected Icon={HomeIcon} title="Home" />
            <SidebarRow Icon={WhatshotIcon} title="Trending" />
            <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
            <hr />
            <SidebarRow Icon={VideoLibraryIcon} title='Library' />
            <SidebarRow Icon={HistoryIcon} title='History' />
            <SidebarRow Icon={ShopTwoIcon} title='Your Videos' />
            <SidebarRow Icon={WatchLaterIcon} title='Watch Later' />
            <SidebarRow Icon={ThumbUpIcon} title='Liked Videos' />
            <SidebarRow Icon={ExpandMoreIcon} title='Show More' />
            <hr />
            <SidebarRow Icon={YoutubeSearchedForIcon} title='Youtube Premium' />
            <SidebarRow Icon={LocalMoviesIcon} title='Movies' />
            <SidebarRow Icon={SportsEsportsIcon} title='Gaming' />
            <SidebarRow Icon={LiveTvIcon} title='Live' />
            <SidebarRow Icon={EmojiObjectsIcon} title='Learning' />
            <hr />
            <SidebarRow Icon={SettingsIcon} title='Settings' />
            <SidebarRow Icon={FlagIcon} title='Report history' />
            <SidebarRow Icon={HelpIcon} title='Help' />
            <SidebarRow Icon={FeedbackIcon} title='Send feedback' />
            <hr />
        </div>
    )
}

export default Sidebar
