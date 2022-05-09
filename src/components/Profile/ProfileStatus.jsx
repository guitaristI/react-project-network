import {useState} from "react";
import {updateStatusThunk} from "../../redux/profiles-reducer";


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusThunk(status)
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }



    return <div>
        {
            !editMode &&
            <div className='status'>
                <span onClick={activateEditMode} >{props.status || '--------'}<span className='status-edit'>edit</span></span>
            </div>
        }
        {
            editMode &&
            <div className='profile-status-input'>
                <input onChange={onStatusChange} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
            </div>
        }
    </div>
}

export default ProfileStatus