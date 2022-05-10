import React, {useState} from "react"
import notification from '../img/notification.png'
import inbox from '../img/inbox.png'
import video from '../img/video.png'
import search from '../img/search.png'
import feedback from '../img/feedback.png'
import {NavLink} from "react-router-dom"
import ava from '../img/icons8.png'
import settings from '../img/setting.png'
import help from '../img/help.png'
import display from '../img/display.png'
import arrow from '../img/arrow-right.png'

const Header = (props) => {

    const [activeButton, setActiveButton] = useState(false)
    const ToggleSwitch = () => {
        activeButton ? setActiveButton(false) : setActiveButton(true)
    }

    const [activeDarkButton, setActiveDarkButton] = useState(false)
    const ToggleSwitchDark = () => {
        activeDarkButton ? setActiveDarkButton(false) : setActiveDarkButton(true)
        document.body.classList.toggle('dark-theme');
    }

    // let effect = useNavigate()
    //
    // useEffect(() => {
    //     effect('/login')
    // }, [])

    return (
        <nav>
            <div className="nav-left">
                <NavLink href='#' className='header-logo' to={'#'}>network</NavLink>
                <ul className='header__list'>
                    <li><img src={notification} alt=""/></li>
                    <li><img src={inbox}alt=""/></li>
                    <li><img src={video}alt=""/></li>
                </ul>
            </div>
            <div className="nav-right">
                <div className="search-box">
                    <img src={search}alt=""/>
                    <input type="text" placeholder='Search'/>
                </div>
                {props.isAuth
                    ? <div className="nav-user-icon online" >
                        <NavLink className='nav-user-login' to={'/login'} onClick={props.logoutThunk} >Logout</NavLink>
                        <img onClick={ToggleSwitch} src={props.profile === null ? ava : props.profile.photos.large } alt=""/>
                </div>
                    : <NavLink className='nav-user-login' to={'/login'}>Login</NavLink>}

            </div>

            <div className={`settings-menu ${activeButton ? 'settings-menu-height' : ''}`}>

                <div onClick={ToggleSwitchDark}  id="dark-btn" className={`${activeDarkButton ? 'dark-btn-on' : ''}`} >
                    <span></span>
                </div>

                <div className="settings-menu-inner">
                    <div className="user-profile drop-list">
                        <img src={props.profile === null ? ava : props.profile.photos.large } alt=""/>
                            <div>
                                <p>Ilya Grigorev</p>
                                <a href="#">See your profile</a>
                            </div>
                    </div>
                    <hr/>
                        <div className="user-profile">
                            <img src={feedback} alt=""/>
                                <div>
                                    <p>Give Feedback</p>
                                    <a href="#">Help us to improve the new design</a>
                                </div>
                        </div>
                        <hr/>

                            <div className="settings-links">
                                <img src={settings} className="settings-icon" alt=""/>
                                    <a href="#">Settings & Privacy <img src={arrow} width="10px" alt=""/></a>
                            </div>
                            <div className="settings-links">
                                <img src={help} className="settings-icon" alt=""/>
                                    <a href="#">Help & Support <img src={arrow} width="10px" alt=""/></a>
                            </div>
                            <div className="settings-links">
                                <img src={display} className="settings-icon" alt=""/>
                                    <a href="#">Display & accessibility <img src={arrow} width="10px"
                                                                             alt=""/></a>
                            </div>
                            <div className="settings-links">
                                <img src="../img/logout.png" className="settings-icon" alt=""/>
                                    {/*<a href='' onClick={props.logoutThunk} >Logout </a>*/}

                            </div>
                </div>
            </div>
        </nav>
    )
}



export default Header;
