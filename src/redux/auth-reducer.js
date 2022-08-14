import member_1 from '../img/member-1.png'
import member_2 from '../img/member-2.png'
import member_3 from '../img/member-3.png'
import {authAPI, usersAPI} from "../api/api";

export const SET_USER_DATA = 'SET_USER_DATA';


let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_USER_DATA: {
            return { ...state, ...action.data, userId: action.userId, isAuth: action.isAuth}
        }

        default:
            return state;
    }
}

export const setUserData = (email, userId, login, isAuth) => ({type: SET_USER_DATA, data: email, userId, login, isAuth})

export const authMeThunk = () => {
    return async (dispatch) => {
        let data = await authAPI.authMe();
            if (data.resultCode === 0) {
                let {email, id, login} = data.data;
                dispatch(setUserData(email, id, login, true))
            }
    }


}

export const loginThunk = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)

        if (response.data.resultCode === 0) {
            dispatch(authMeThunk())
        }
}
export const logoutThunk = () => async (dispatch) => {
    let response = await authAPI.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserData(null, null, null, false))
        }
}



export default authReducer;