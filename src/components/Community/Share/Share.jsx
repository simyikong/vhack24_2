import "./Share.css";
import { FaUserCircle } from 'react-icons/fa';

export default function Share() {
  return (
    <div className="sharebox"> {/* Add the 'box' class here */}
      <div className="shareWrapper">
        <div className="shareTop">
        <FaUserCircle src  size={50} />
          <input
            placeholder=" Share something.."
            className="shareInput"
          />
        </div>
        <hr className="shareHr"/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <span className="shareOptionText">Photo or Video</span>
                </div>
                <div className="shareOption">
                    <span className="shareOptionText">Tag</span>
                </div>
            </div>
            <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
}
