import React from 'react';
import post from "./Post.module.css"

const Post = (props) => {
    return (
        <div className={post.item}>
            <img src={props.src}/>
            <div>{props.text}</div>
            <div>
                <span>Like {props.likesCount}</span>
            </div>
        </div>
    );
}
export default Post;