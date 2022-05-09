import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {getProfileThunk, getStatusThunk, updatePhotoThunk, updateStatusThunk} from "../../redux/profiles-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import Profile from "./Profile";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import {authMeThunk} from "../../redux/auth-reducer";


const ProfileContainer = (props) => {
    useEffect(() => {
        props.getProfileThunk(props.userId)
        props.getStatusThunk(props.userId)
    }, [props.userId])
    return <Profile {...props}  />

}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        userId: state.auth.userId,
        isAuth: state.auth.isAuth,
        status: state.profilePage.status
    }
}

export default compose(connect(mapStateToProps, {getProfileThunk, getStatusThunk, updateStatusThunk, updatePhotoThunk}), withAuthRedirect)(ProfileContainer)