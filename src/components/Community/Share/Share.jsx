import "./Share.css";
import { FiImage, FiTag } from 'react-icons/fi'; // Importing the icons

export default function Share() {
  return (
    <div className="sharebox">
      <div className="shareWrapper">
        <div className="shareTop">
          {/* Use the <img> tag to display the user image */}
          <img
            src='../images/Above+Avalon+Neil+Cybart.png'
            alt="User"
            className="userImage"
            style={{ border: '1px solid #ccc', borderRadius: '50%', width: '50px', height: '50px', marginRight: '10px' }}
          />
          <input
            placeholder="Share something.."
            className="shareInput"
          />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <FiImage className="shareIcon" style={{ strokeWidth: '1.0' }} /> {/* Set strokeWidth to make the line narrower */}
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <FiTag className="shareIcon" style={{ strokeWidth: '1.0' }} /> {/* Set strokeWidth to make the line narrower */}
              <span className="shareOptionText">Tag</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
