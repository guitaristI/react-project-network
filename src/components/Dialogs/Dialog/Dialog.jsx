import icons8 from "../../../img/icons8-многоточие-30 (1).png";
import { NavLink } from "react-router-dom"


const Dialog = (props) => {
    return (
        <NavLink to='/chat'>
            <div className="dialog-row">
                <div className="dialog-item">
                    <img src={props.avatar} alt=""/>
                    <div>
                        <p>{props.name}</p>
                        <span>{props.message}</span>
                    </div>
                </div>
                <img src={icons8} alt=""/>
            </div>
        </NavLink>
    )
}

export default Dialog;