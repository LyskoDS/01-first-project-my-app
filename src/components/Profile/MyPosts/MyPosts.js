import React from "react";
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let post = props.postsData.map(p => <Post message={p.post}
                                              likesCount={p.likesCount}/>);

    let newPost = React.createRef();
    let addPost = () => {
        props.addPost();
    }

    let onPostChange = () => {
        let text = newPost.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div className={s.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange}
                              ref={newPost}
                              value={props.newPostText}
                    />
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