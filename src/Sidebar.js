import React from 'react'
import "./Sidebar.css"
import HomeIcon from '@material-ui/icons/Home';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import CallIcon from '@material-ui/icons/Call';
import PlaylistAddIcon from '@material-ui/icons/PlaylistAdd';
import HistoryIcon from '@material-ui/icons/History';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="head">
                {/*App NAME */}
                <h1>App Name</h1>
                <h4>Version </h4>
                { /* Info */}

            </div>

            <div className="content">
                <div className="Icons">
                    <HomeIcon className="icon" />
                    <h3>Home</h3>
                </div>
                <div className="Icons">
                    <SubscriptionsIcon className="icon" />
                    <h3>Subscription</h3>
                </div>
                <hr />
                <div className="Icons">
                    <CallIcon className="icon" />
                    <h3>Call</h3>
                </div>
                <div className="Icons">
                    <PlaylistAddIcon className="icon" />
                    <h3>PlayList</h3>
                </div>

                <div className="Icons">
                    <HistoryIcon className="icon" />
                    <h3>History</h3>

                </div>
                <div className="Icons">
                    <ArrowDropDownIcon className="icon" />
                    <h3>See More</h3>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
