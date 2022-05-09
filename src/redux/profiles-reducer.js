import feed_image_1 from "../img/feed-image-1.png";
import feed_image_2 from "../img/feed-image-2.png";
import feed_image_3 from "../img/feed-image-3.png";
import feed_image_4 from "../img/feed-image-4.png";
import feed_image_5 from "../img/feed-image-5.png";
import {usersAPI} from "../api/api";
export const ADD_POST = 'ADD-POST';
export const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
export const SET_USER_PROFILE = 'SET_USER_PROFILE';
export const SET_USER_ID = 'SET_USER_ID';
export const SET_STATUS = 'SET_STATUS';
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';

let initialState = {
    postsData: [
        {
            id: 1,
            text: "Subscribe YouTube channel's to watch more videos on website development and UI design.",
            image: feed_image_1,
            likeCount: 120,
            commentsCount: 45,
            shareCount: 20
        },
        {
            id: 2,
            text: "Subscribe YouTube channel's to watch more videos on website development and UI design.",
            image: feed_image_2,
            likeCount: 12,
            commentsCount: 52,
            shareCount: 22
        },
        {
            id: 3,
            text: "Subscribe YouTube channel's to watch more videos on website development and UI design.",
            image: feed_image_3,
            likeCount: 55,
            commentsCount: 10,
            shareCount: 75
        },
        {
            id: 4,
            text: "Subscribe YouTube channel's to watch more videos on website development and UI design.",
            image: feed_image_4,
            likeCount: 98,
            commentsCount: 5,
            shareCount: 0
        },
        {
            id: 5,
            text: "Subscribe YouTube channel's to watch more videos on website development and UI design.",
            image: feed_image_5,
            likeCount: 70,
            commentsCount: 25,
            shareCount: 1
        },
    ],
    newPostText: '',
    profile: null,
    userId: 21874,
    status: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                text: state.newPostText,
                image: feed_image_1,
                likeCount: 120,
                commentsCount: 45,
                shareCount: 20
            }
        return {
            ...state,
            postsData: [...state.postsData, newPost],
            newPostText: '',
        }
        case UPDATE_NEW_POST_TEXT:
        return {
            ...state,
            newPostText: action.newText
        }
        case SET_USER_PROFILE:
        return {
            ...state,
            profile: action.profile
        }
        case SET_USER_ID:
        return {
            ...state,
            userId: action.userId
        }
        case SET_STATUS:
        return {
            ...state,
            status: action.status
        }
        case SAVE_PHOTO_SUCCESS:
            return {

                ...state,
                 profile: {...state.profile, photos: action.photo}
            }

        default:
            return state;
    }
}

export const addPostAC = () => ({type: ADD_POST})
export const updateNewPostTextAC = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setUserId = (userId) => ({type: SET_USER_ID, userId})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const savePhotoSuccess = (photo) => ({type: SAVE_PHOTO_SUCCESS, photo})


export const getProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(setUserId(userId))
        usersAPI.getProfile(userId).then(data => {
            dispatch(setUserProfile(data))
        })
    }
}

export const getStatusThunk = (userId) => {
    return (dispatch) => {
        dispatch(setUserId(userId))
        usersAPI.getStatus(userId).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        usersAPI.updateStatus(status).then(response => {
            if (response.data.resultCode === 0) {
                dispatch(setStatus(status));
            }
        })
    }
}
export const updatePhotoThunk = (file) => {
    return (dispatch) => {
        usersAPI.updatePhoto(file).then(response => {
            dispatch(savePhotoSuccess(response.data.data.photos))
        })
    }
}



export default profileReducer;