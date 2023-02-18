import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

    let  post = props.postsData.map(p => <Post message={p.post} likesCount={p.likesCount}/>)

    return (
        <div className={s.item}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {post}
            </div>
        </div>
    )
}

export default MyPosts;