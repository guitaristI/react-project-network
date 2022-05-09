import {authMeThunk} from "./auth-reducer";

export const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';


let initialState = {
    initialized: false,
}

const appReducer = (state = initialState, action) => {
    switch(action.type) {
        case INITIALIZED_SUCCESS: {
            return { ...state, initialized: true}

        }
        default:
            return state;
    }
}

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS})

export const initializeAppThunk = () => {
    return (dispatch) => {
        let promise = dispatch(authMeThunk());
        // in arr others dispatches
        Promise.all([promise]).then(() => {
            dispatch(initializedSuccess())
        })
    }
}




export default appReducer;