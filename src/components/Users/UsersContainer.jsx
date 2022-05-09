import React from 'react';
import {connect} from "react-redux";
import Users from "./Users";
import {
    follow, followThunk, getUsersThunk,
    setCurrentPage,
    toggleIsFetching, toggleIsFollowingProgress,
    unfollow, unfollowThunk
} from "../../redux/users-reducer";
import {
    getCurrentPage,
    getFollowingInProgress,
    getIsFetching,
    getTotalUsersCount,
    getUsers,
    getUsersPage
} from "../../redux/users-selector";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsersThunk(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (currentPage) => {
        this.props.getUsersThunk(currentPage, this.props.pageSize)
    }

    render() {
        return <>
            <Users currentPage={this.props.currentPage}
                            onPageChanged={this.onPageChanged}
                            users={this.props.users}
                            unfollow={this.props.unfollow}
                            follow={this.props.follow}
                            totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize} isFetching={this.props.isFetching}
                            followingInProgress={this.props.followingInProgress}
                            toggleIsFollowingProgress={this.props.toggleIsFollowingProgress}
                            followThunk={this.props.followThunk} unfollowThunk={this.props.unfollowThunk} />

    </>
    }
}


let mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getUsersPage(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         followMe: (userId) => {
//             dispatch(followAC(userId))
//         },
//         unfollowMe: (userId) => {
//             dispatch(unfollowAC(userId))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users))
//         },
//         setCurrentPage: (currentPage) => {
//             dispatch(setCurrentPageAC(currentPage))
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount))
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching))
//         }
//     }
// }

export default connect(mapStateToProps, {follow, unfollow, setCurrentPage,
    toggleIsFetching, toggleIsFollowingProgress, getUsersThunk, followThunk, unfollowThunk})(UsersContainer);
