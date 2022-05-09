import Preloader from "../common/Preloader";
import ava from '../../img/icons8.png'

const UserProfile = (props) => {
    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className="main-content">
            <div className='profile__about'>
                <div className="profile__about__row">
                    {props.profile.photos.large === null ? <img src={ava}/> : <img src={props.profile.photos.large} alt=""/> }
                </div>
                <div className="profile__about-row">
                    <ul className="profile__about-list">
                        <div className='profile__about-list-title'>About me:</div>
                        <li className="profile__about-link"><a href="#"><span>fullName: </span>{props.profile.fullName}</a></li>
                        <li className="profile__about-link"><a href="#"><span>status:</span> {props.profile.aboutMe}</a></li>
                        <li className="profile__about-link"><a href="#"><span>vk:</span> {props.profile.contacts.vk}</a></li>
                        <li className="profile__about-link"><a href="#"><span>twitter:</span> {props.profile.contacts.twitter}</a></li>
                        <li className="profile__about-link"><a href="#"><span>instagram:</span> {props.profile.contacts.instagram}</a></li>
                        <li className="profile__about-link"><a href="#"><span>github:</span> {props.profile.contacts.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )


}

export default UserProfile;