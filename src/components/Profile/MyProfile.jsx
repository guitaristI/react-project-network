import ava from "../../img/icons8.png";
import Preloader from "../common/Preloader";
import ProfileStatus from "./ProfileStatus";


const MyProfile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }

    const selectPhoto = (e) => {
        if (e.target.files.length) {
            props.updatePhotoThunk(e.target.files[0])
        }
    }

    return <div className="">
        <div className='profile__about'>
            <div className="profile__rows">
                <div className="profile__about__row">
                    {props.profile.photos.large === null ? <img src={ava}/> : <img src={props.profile.photos.large} alt=""/> }
                </div>
                <div className="profile__about-row">
                    <ul className="profile__about-list">
                        <div className='profile__about-list-title'>About me:</div>
                        <li className="profile__about-link"><a href="#"><span>fullName:</span>{props.profile.fullName}</a></li>
                        <li className="profile__about-link status-profile"><span>status:</span> <ProfileStatus updateStatusThunk={props.updateStatusThunk}
                                                                                                               status={props.status} /></li>
                        <li className="profile__about-link"><a href="#"><span>vk:</span> {props.profile.contacts.vk}</a></li>
                        <li className="profile__about-link"><a href="#"><span>twitter:</span> {props.profile.contacts.twitter}</a></li>
                        <li className="profile__about-link"><a href="#"><span>instagram:</span> {props.profile.contacts.instagram}</a></li>
                        <li className="profile__about-link"><a href="#"><span>github:</span> {props.profile.contacts.github}</a></li>
                    </ul>
                </div>
            </div>
            <div className='profile-file'>
                <button type='button' className='profile-upload-btn'>
                    <i className='fa fa-upload'></i> Upload Photo
                    <input onChange={selectPhoto} type="file"/>
                </button>
            </div>

        </div>

    </div>
}

export default MyProfile;