import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.profile.postsData}
                         newPostText={props.profile.newPostText}
                         dispatch={props.dispatch}
                />
            </div>
        </div>
    )
}

export default Profile;