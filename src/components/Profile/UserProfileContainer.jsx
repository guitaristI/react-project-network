import React, {useEffect} from "react";
import {connect} from "react-redux";
import {getProfileThunk, setUserId, setUserProfile} from "../../redux/profiles-reducer";
import Profile from "./Profile";
import {
    useLocation,
    useNavigate,
    useParams,
} from "react-router-dom";
import UserProfile from "./userProfile";
import {getProfile, getUserId} from "../../redux/users-profile-selector";


const UserProfileContainer = (props) => {

    const {userId} = useParams();
    useEffect(() => {
        props.getProfileThunk(userId)
    }, [userId])
        return <UserProfile {...props}  />


}

let mapStateToProps = (state) => {
    return {
        profile: getProfile(state),
        userId: getUserId(state),
    }
}

export default connect(mapStateToProps, {getProfileThunk})(UserProfileContainer)