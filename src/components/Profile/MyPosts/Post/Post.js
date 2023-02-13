import s from './Post.module.css';

const Post = () => {
    return (
        <div>
            <div className={s.item}>
                <img src='https://i.pinimg.com/originals/d8/be/ae/d8beaedfd933509beaf3202d156491aa.jpg'/>
                post 1
                <div>
                    <span>Like</span>
                </div>
            </div>
        </div>
    )
}

export default Post;