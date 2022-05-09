import profile_pic from "../../../../img/profile-pic.png";
import icons8 from "../../../../img/icons8-многоточие-30 (1).png";
import feed_image_1 from "../../../../img/feed-image-1.png";
import like_blue from "../../../../img/like-blue.png";
import comments from "../../../../img/comments.png";
import share from "../../../../img/share.png";
import caret_down from "../../../../img/caret-down.png";


const Post = (props) => {
    return (
        <div className="post-container">
            <div className="post-row">
                <div className="user-profile">
                    <img src={props.profile.photos.large} alt=""/>
                    <div>
                        <p>Ilya Grigorev</p>
                        <span>June 24 2021, 13:40 pm</span>
                    </div>
                </div>
                <a className="ellipsis" href="#"><img src={icons8} alt=""/></a>
            </div>

            <p className="post-text">{props.text}</p>
            <img src={props.image} className="post-img" alt=""/>

            <div className="post-row">
                <div className="activity-icons">
                    <div className=""><img src={like_blue} alt=""/> {props.likeCount}</div>
                    <div className=""><img src={comments} alt=""/> {props.commentsCount}</div>
                    <div className=""><img src={share}alt=""/> {props.shareCount}</div>
                </div>
                <div className="post-profile-icon">
                    <img src={profile_pic} alt=""/>
                    <img src={caret_down} alt=""/>
                </div>
            </div>
        </div>
    )
}

export default Post;