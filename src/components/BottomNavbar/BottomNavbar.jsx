import news from '../../img/news.png'
import friends from '../../img/friends.png'
import group from '../../img/group.png'
import mail from '../../img/email_mail_envelope_message_icon_181521.png'
import {NavLink} from "react-router-dom";

const BottomNavbar = props => {
    return <>
        <div className="bottom">
            <div className="bottom__rows">
                <div className="bottom__row">
                    <NavLink  to={`/profile`}><img src={news} alt=""/></NavLink>
                </div>
                <div className="bottom__row">
                    <NavLink to="/users"><img src={friends} alt=""/></NavLink>
                </div>
                <div className="bottom__row">
                    <NavLink to="/dialogs"><img src={mail} alt=""/></NavLink>
                </div>
                <div className="bottom__row">
                    <a href="#"><img src={group} alt=""/></a>
                </div>
            </div>
        </div>
    </>
}

export default BottomNavbar