import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.state.postsData} />
            </div>
        </div>
    )
}

export default Profile;