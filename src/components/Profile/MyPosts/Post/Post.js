import s from './Post.module.css';

const Post = (props) => {
    return (
        <div className={s.item}>
            <img src='https://kartinkin.net/pics/uploads/posts/2022-08/1660407500_2-kartinkin-net-p-chisto-chernie-oboi-na-telefon-krasivo-2.jpg'/>
            {props.message}
            <div>
                <span>like</span> {props.likesCount}
            </div>
        </div>
    )
}

export default Post;