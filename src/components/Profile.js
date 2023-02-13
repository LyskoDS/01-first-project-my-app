import s from './Profile.module.css';

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img
                src='https://kartinkin.net/uploads/posts/2022-02/1645929650_30-kartinkin-net-p-kartinki-mototsiklistov-38.jpg'/>
        </div>
        <div>
            <img src='https://cs13.pikabu.ru/avatars/3194/x3194670-1190804622.png'/>
        </div>
        <div className={s.item}>
            ava + description
        </div>
        <div className={s.item}>
            My posts
            <div className={s.item}>
                New post
            </div>
        </div>
        <div className={s.posts}>
        <div className={s.item}>
            post 1
        </div>
        <div className={s.item}>
            post 2
        </div>
    </div>
</div>
}

export default Profile;