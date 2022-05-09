import MyStories from "./MyStories/MyStories";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {Navigate} from "react-router";
import React from "react";
import MyProfile from "./MyProfile";
import Preloader from "../common/Preloader";

const Profile = (props) => {
        if (!props.profile) {
                return <Preloader/>
        }
        return (
            <div className="main-content">
                <MyProfile {...props} />
                <MyStories/>
                <MyPostsContainer {...props} store={props.store}/>
            </div>
        )


}

export default Profile;