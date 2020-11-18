import React from 'react';
import pro from "./MyPosts.module.css"
import Post from './Post/Post';

const MyPosts = (props) => {

    let newMyPostsArr = props.myPostArr.map((el) => {
        return <Post likesCount={el.likesCount} text={el.message} src="https://www.nj.com/resizer/zovGSasCaR41h_yUGYHXbVTQW2A=/1280x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" />
    });
    
    let newPostElement = React.createRef();
    // let addPost = () =>{
    //     let text = newPostElement.current.value;
    //      props.addPost(text) ;
    // }
    return (
        <div className={pro.caption}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref ={newPostElement}>
                    </textarea>
                </div>
                <button onClick = { ()=> {alert('hi')}}>Add post</button>
            </div>
            <div className={pro.posts}>
                {newMyPostsArr}

            </div>
        </div>
    );
}

export default MyPosts;