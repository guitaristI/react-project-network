import search from "../../img/search.png";
import Dialog from "./Dialog/Dialog";
import {Navigate} from "react-router";

const Dialogs = (props) => {
    return (
        <div className='dialogs-content'>
            <div className="write-post-container">
                <div className="search-dialogs">
                    <img src={search} alt=""/>
                    <input type="text" placeholder='Search'/>
                </div>

            </div>
            <div className="dialogs-container" >
                {props.dialogsPage.dialogsData.map( a => <Dialog key={a.id} id={a.id} avatar={a.avatar} name={a.name} message={a.message}/>)}
            </div>
        </div>
    )
}

export default Dialogs;