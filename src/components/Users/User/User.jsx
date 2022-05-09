
import icons8 from "../../../img/icons8-многоточие-30 (1).png";
import avatar from "../../../img/icons8.png";
import { NavLink } from "react-router-dom"
import * as axios from "axios";
import {usersAPI} from "../../../api/api";
import {followThunk, toggleIsFollowingProgress} from "../../../redux/users-reducer";


const User = (props) => {
    return (
        <div className="dialog-row">
            <div className="dialog-item">
                <img src={props.photos != null ? props.photos : avatar} alt=""/>
                <div>
                    <NavLink to={`/profile/` + props.id}>
                        <p>{props.name}</p>
                    </NavLink>
                    <span>{props.status}</span>

                </div>
            </div>
            <div className='user-btn'>
                {props.followed
                    ? <button className='add-post-btn' disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.unfollowThunk(props.id)
                         } }>Unfollow</button>
                    : <button className='add-post-btn' disabled={props.followingInProgress.some(id => id === props.id)} onClick={() => {
                        props.followThunk(props.id)

                         } }>Follow</button>}

                <a className="ellipsis" href="#"><img src={icons8} alt=""/></a>
            </div>

        </div>

    )
}

export default User;