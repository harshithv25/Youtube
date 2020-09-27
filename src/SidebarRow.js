import React from 'react'
import './SidebarRow.css'
import HomeIcon from '@material-ui/icons/Home';

function SidebarRow({ title, Icon, selected }) {
    return (
        <div className={`sidebarRow ${selected && 'selected'}`}>
            {/* <HomeIcon /> */}
            <Icon className={`sidebarRow__icon ${selected && 'selected'}`} />
            <h2 className="sidebarRow__title">{title}</h2>
        </div>
    )
}

export default SidebarRow
