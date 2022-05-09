import news from '../img/news.png'
import friends from '../img/friends.png'
import group from '../img/group.png'
import mail from '../img/email_mail_envelope_message_icon_181521.png'
import watch from '../img/watch.png'
import shortcut_1 from '../img/shortcut-1.png'
import shortcut_2 from '../img/shortcut-2.png'
import shortcut_3 from '../img/shortcut-3.png'
import shortcut_4 from '../img/shortcut-4.png'
import { NavLink } from "react-router-dom"


const Navbar = () => {
    return (<>
            <div className="left-sidebar">
                <div className="imp-links">
                    <NavLink  to={`/profile`}><img src={news} alt=""/>Profile</NavLink>
                    <NavLink to="/users"><img src={friends} alt=""/>Users</NavLink>
                    <NavLink to="/dialogs"><img src={mail} alt=""/>Dialogs</NavLink>
                    <a href="#"><img src={group} alt=""/>Group</a>
                    <a href="#"><img src={watch} alt=""/>Watch</a>
                    <a href="#">See More</a>
                </div>
                <div className="shortcut-links">
                    <p>Your shortcut</p>
                    <a href="#"><img src={shortcut_1} alt=""/>Web Developers</a>
                    <a href="#"><img src={shortcut_2} alt=""/>Web Desighn course</a>
                    <a href="#"><img src={shortcut_3} alt=""/>Full Stack Development</a>
                    <a href="#"><img src={shortcut_4} alt=""/>Website Experts</a>
                </div>
            </div>
</>
    )
}


export default (Navbar) ;