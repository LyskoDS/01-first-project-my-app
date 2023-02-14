import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.item}>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                <Post message='Hi, how are you?' likesCount='10'/>
                <Post message="It's my first post" likesCount='124'/>
            </div>
        </div>
    )
}

export default MyPosts;