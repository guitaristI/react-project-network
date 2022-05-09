import React from "react";
import {addPostAC, updateNewPostTextAC} from "../../../redux/profiles-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";





let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData,
        profile: state.profilePage.profile,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        postChange: (text) => {
            dispatch(updateNewPostTextAC(text))
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;