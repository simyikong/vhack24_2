import React, { useState } from "react";
import Feed from "./Feed/Feed";
import Groups from "./Groups/Groups"; 
import UsersPage from "./UsersPage/UsersPage"
import CommunityRightBar from "./CommunityRightBar/CommunityRightBar";
import FeedOptionsBar from "./FeedOptionsBar/FeedOptionsBar"; // Import FeedOptionsBar component
import "./Community.css";

export const Community = () => {
  const [feedOption, setFeedOption] = useState('discussion');

  const handleFeedOptionChange = (option) => {
    setFeedOption(option);
  };
  
  const renderComponent = () => {
    switch(feedOption) {
      case 'discussion':
        return <Feed />;
      case 'groups':
        return <Groups />;
      case 'users':
        return <UsersPage />;
      default:
        return <Feed />;
    }
  };

  return (
    <>
      <div className="homeContainer"> 
        <FeedOptionsBar feedOption={feedOption} handleFeedOptionChange={handleFeedOptionChange} />
        {renderComponent()}
        <CommunityRightBar />
      </div>
    </>
  );
};
