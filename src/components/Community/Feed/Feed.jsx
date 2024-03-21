import React, { useState } from 'react';
import { Posts } from '../dummyData.js';
import './Feed.css';
import Post from '../Post/Post';
import Share from '../Share/Share';

export default function Feed() {
  const [feedType, setFeedType] = useState('newest');

  const handleFeedTypeChange = (type) => {
    setFeedType(type);
  };

  const filteredPosts = feedType === 'newest' ? Posts : [];

  return (
    <div className="feed">
      {/* Feed Controls */}
      <div className="feedControls">
        <button className={feedType === 'newest' ? 'active' : ''} onClick={() => handleFeedTypeChange('newest')}>
          Newest
        </button>
        <button className={feedType === 'trending' ? 'active' : ''} onClick={() => handleFeedTypeChange('trending')}>
          Trending
        </button>
      </div>
      
      {/* Feed Wrapper */}
      <div className="feedWrapper">
        <Share />
        {filteredPosts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}
