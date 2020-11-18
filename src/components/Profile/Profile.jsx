import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import pro from "./Profile.module.css";
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Content = (props) => {
   
    return (
        <div className={pro.content}>
            <ProfileInfo />
            <MyPosts myPostArr={props.state.myPostArr} addPost = {props.addPost}/>
        </div>

    );
}

export default Content;