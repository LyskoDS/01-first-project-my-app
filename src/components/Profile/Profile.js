import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div>
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
            <MyPosts/>
        </div>
    )
}

export default Profile;