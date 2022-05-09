import {usersAPI} from "../api/api";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const SET_USERS = 'SET_USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map( a =>  {
                    if (a.id === action.userId) {
                        return {...a, followed: true}
                    }
                    return a;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map( a =>  {
                    if (a.id === action.userId) {
                        return {...a, followed: false}
                    }
                    return a;
                })
            }
        case SET_USERS: {
            return { ...state, users: [  ...action.users ]}
        }
        case SET_CURRENT_PAGE: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL_USERS_COUNT: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_IS_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleIsFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING, isFetching})
export const toggleIsFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId})

export const getUsersThunk = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        dispatch(setCurrentPage(currentPage))
        let data = await usersAPI.getUsers(currentPage, pageSize)
            dispatch(toggleIsFetching(false))
            dispatch(setUsers(data.items))
            dispatch(setTotalUsersCount(data.totalCount))
    }
}



export const followThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        let data = await usersAPI.follow(id)
            if (data.resultCode === 0) {
                dispatch(follow(id))
            }
            dispatch(toggleIsFollowingProgress(false, id))
    }
}
export const unfollowThunk = (id) => {
    return async (dispatch) => {
        dispatch(toggleIsFollowingProgress(true, id))
        let data = await usersAPI.unfollow(id)
            if (data.resultCode === 0) {
                dispatch(unfollow(id))
            }
            dispatch(toggleIsFollowingProgress(false, id))
    }
}

export default usersReducer;