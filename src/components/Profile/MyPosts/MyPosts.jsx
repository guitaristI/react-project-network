import profile_pic from "../../../img/profile-pic.png";
import live_video from "../../../img/live-video.png";
import photo from "../../../img/photo.png";
import feeling from "../../../img/feeling.png";
import Post from "./Post/Post";
import React from "react";



const MyPosts = (props) => {

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.postChange(text);
    }

    return (
        <div className="write-post-container">
            <div className="user-profile">
                <img src={props.profile.photos.large} alt=""/>
                <div>
                    <p>Ilya Grigorev</p>
                    <small>Publick</small>
                </div>
            </div>
            <div className="post-input-container">
                <textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText} rows="3" placeholder="What's on your mind, Ilya?"/>
                <div className="add-post">
                    <div className="add-post-links">
                        <a href="#"><img src={live_video} alt=""/> Live video</a>
                        <a href="#"><img src={photo} alt=""/> Photo/Video</a>
                        <a href="#"><img src={feeling} alt=""/> Feeling/Activity</a>
                    </div>
                    <button onClick={onAddPost} className="add-post-btn">
                        Add post
                    </button>
                </div>

            </div>

            {props.postsData.map(a => <Post {...props} key={a.id} text={a.text} image={a.image} likeCount={a.likeCount} commentsCount={a.commentsCount} shareCount={a.shareCount}/>)}


            <button type="botton" className="load-more-btn">
                Load More
            </button>
        </div>

    )
}

export default MyPosts;