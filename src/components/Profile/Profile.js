import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/state";

const Profile = (props) => {

    return (
        <div>
            <div>
                <ProfileInfo/>
                <MyPosts postsData={props.profile.postsData}
                         newPostText={props.profile.newPostText}
                         updateNewPostText={props.updateNewPostText}
                         addPost={props.addPost}
                />
            </div>
        </div>
    )
}

export default Profile;