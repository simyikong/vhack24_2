import { Users } from "../dummyData.js";
import { useState } from "react";
import { FaHeart, FaComment } from 'react-icons/fa'; // Import necessary icons
import "./Post.css";

export default function Post({ post }) {
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  // Find the user who made the post
  const user = Users.find((user) => user.id === post.userId);

  return (
    <div className="post box">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src={user.profilePicture} // Use the profile picture of the user
              alt=""
            />
            <span className="postUsername">
              {user.username} {/* Display the username of the user */}
            </span>
            <span className="postDate">{post.date}</span>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post.desc}</span>
          {/* Assuming there's a 'photo' field in the post object, display it here */}
          {post.photo && <img className="postImg" src={post.photo} alt="" />}
        </div>
        <div className="postBottom">
          <div className="postActions">
            <div className="postAction" onClick={likeHandler}>
              {isLiked ? (
                <FaHeart className="postActionIcon liked" />
              ) : (
                <FaHeart className="postActionIcon" />
              )}
              <span className="postLikeCounter">{like} people like it</span>
            </div>
            <div className="postAction">
              <FaComment className="postActionIcon" />
              <span className="postCommentText">{post.comment} discussions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
