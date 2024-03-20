import React from 'react';
import '../Feed/Feed.css'; // Import the Feed.css file

export default function FeedOptionsBar({ feedOption, handleFeedOptionChange }) {
  return (
    <div className="feedOptions">
        <button className={`feedOptionButton ${feedOption === 'discussion' ? 'active' : ''}`} onClick={() => handleFeedOptionChange('discussion')}>
          Discussion
        </button>
        <button className={`feedOptionButton ${feedOption === 'groups' ? 'active' : ''}`} onClick={() => handleFeedOptionChange('groups')}>
          Group
        </button>
        <button className={`feedOptionButton ${feedOption === 'users' ? 'active' : ''}`} onClick={() => handleFeedOptionChange('users')}>
          User
        </button>
    </div>
  );
}
