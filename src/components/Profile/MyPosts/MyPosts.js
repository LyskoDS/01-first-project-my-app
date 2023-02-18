import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let post = props.postsData.map(p => <Post message={p.post} likesCount={p.likesCount}/>);

    let newPost = React.createRef();
    let addPost = () => {
        let text = newPost.current.value;
        alert(text);
    }

    return (
        <div className={s.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea ref={newPost}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;