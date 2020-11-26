import React from 'react';
import { NavLink } from 'react-router-dom';
import Friends from './Friends/Friends';
import classes from "./Nav.module.css"

const Nav = (props) => {

    let newFriendsArr = props.fre.friendsArr.map((el) => {
        return <Friends name={el.name} src={el.src} />
    })
    return (
        <nav className={classes.nav}>
            <div className={classes.item}>
                <NavLink to="/profile" activeClassName={classes.activeLink}>Profile</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="/dialogs" activeClassName={classes.activeLink}>Messages</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#" > News</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#"> Music</NavLink>
            </div>
            <div className={classes.item}>
                <NavLink to="#" > Settings</NavLink>
            </div>
            <div>
                <h3>My friends</h3>
                <div>
                    {newFriendsArr}
                </div>
            </div>
        </nav>

    );
}

export default Nav;