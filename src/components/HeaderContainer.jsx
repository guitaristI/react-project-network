import React from "react";
import Header from "./Header";
import {authMeThunk, logoutThunk} from "../redux/auth-reducer";
import {connect} from "react-redux";
import Preloader from "./common/Preloader";



const HeaderContainer = (props) => {

    return (

        <Header {...props} />
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
    profile: state.profilePage.profile,
})

export default connect(mapStateToProps, {authMeThunk, logoutThunk})(HeaderContainer) ;
