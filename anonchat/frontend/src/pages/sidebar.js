import { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';
import React from 'react';
import "boxicons";
function SideBar() {
const [sidebarNavItems, setsidebarNavItems] = useState( [
    {
        display: 'Dashboard',
        icon: <i className='bx bx-home'></i>,
        to: '/Admin',
        section: ''
    },
    {
        display: 'Manage Users',
        icon: <i className='bx bx-star'></i>,
        to: '/UsersList',
        section: 'UsersList'
    },
    {
        display: 'Manage Rooms',
        icon: <i className='bx bx-calendar'></i>,
        to: '/Rooms',
        section: 'Rooms'
    },
    {
        display: 'Users',
        icon: <i className='bx bx-user'></i>,
        to: '/Users',
        section: 'user'
    },
    {
        display: 'Settings',
        icon: <i className='bx bx-receipt'></i>,
        to: '/Settings',
        section: 'order'
    },
]);

    return(
    <>

    <div className='sidebar'>
        <div className="sidebar_logo">
           <strong>Admin</strong> 
        </div>
        <div className="sidebar_menu">
           
            {
                sidebarNavItems.map((item, index) => (
                    <Link to={item.to} key={index}>
                        <div className={`sidebar_menu_item `}>
                            <div className="sidebar_menu_item_icon">
                                {item.icon}
                            </div>
                            <div className="sidebar_menu_item_text">
                                <b> {item.display}</b>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
    </div>;
    </>
    );
}

export default SideBar;