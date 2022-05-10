import React from "react";
import './App.css';
import Navbar from "./components/Navbar";
import RightSidebar from "./components/Right_sidebar";
import ChatContainer from "./components/Chat/ChatContainer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import { Routes, Route } from 'react-router-dom';
import HeaderContainer from "./components/HeaderContainer";
import LoginForm from "./components/Login/Login";
import UserProfileContainer from "./components/Profile/UserProfileContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {useEffect} from "react";
import {connect} from "react-redux";
import {initializeAppThunk} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader";
import BottomNavbar from "./components/BottomNavbar/BottomNavbar";
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer"));

function App(props) {
    useEffect(() => {
        props.initializeAppThunk()
    })

    if (!props.initialized) {
        return <div className='app-preloader' >
            <Preloader/>
        </div>
    }

    return (
          <div className="myBody">
              <HeaderContainer/>
              <div className="container">
                  <Navbar/>

                  <Routes>
                      <Route path="profile/:userId" element={<UserProfileContainer /> } />

                      <Route path="profileMe" element={<ProfileContainer /> } />

                      <Route path="dialogs" element={<DialogsContainer />} />

                      <Route path="chat" element={<ChatContainer />} />

                      <Route path="users" element={
                          <React.Suspense fallback={<Preloader/>}>
                              <UsersContainer />
                          </React.Suspense>
                      } />

                      <Route path="*" element={<ProfileContainer/> } />

                      <Route path="login" element={<LoginForm/> } />
                  </Routes>
                  <RightSidebar/>
              </div>
              <BottomNavbar/>
          </div>
  );
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeAppThunk})(App) ;
