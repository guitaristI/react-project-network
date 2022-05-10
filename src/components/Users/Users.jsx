import search from "../../img/search.png";
import User from "./User/User";
import React from "react";
import loading from "../../img/hug.gif";
import Preloader from "../common/Preloader";
import Paginator from "../common/Paginator";


const Users = (props) => {

    return <div className='users'>
        <div className="users-container">
            <div className="write-post-container">

                <div className="search-dialogs">
                    <img src={search} alt=""/>
                    <input type="text" placeholder='Search'/>
                </div>
            </div>

            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>

            <div className="user-container">
                {props.isFetching ? <div className='users-preloader'><Preloader /> </div> : null}
                {props.users.map( a => <User key={a.id}
                                             photos={a.photos.small}
                                             setUsers={props.setUsers}
                                             follow={props.follow}
                                             unfollow={props.unfollow}
                                             id={a.id}
                                             name={a.name}
                                             status={a.status}
                                             followed={a.followed}
                                             followingInProgress={props.followingInProgress}
                                             toggleIsFollowingProgress={props.toggleIsFollowingProgress}
                                             followThunk={props.followThunk} unfollowThunk={props.unfollowThunk} />)}
            </div>
        </div>

    </div>
}


export default Users;