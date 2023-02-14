import s from './Post.module.css';

const Post = (props) => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg'/>
                {props.message}
                {props.likesCount}
            </div>
        </div>
    )
}

export default Post;