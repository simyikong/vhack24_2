import React from "react";
import Feed from "./Feed/Feed";
import CommunityRightBar from "./CommunityRightBar/CommunityRightBar"
import "./Community.css";

export const Community = () => {
  return (
    <>
      <div className="homeContainer"> 
        <Feed />
        <CommunityRightBar/>
      </div>
    </>
  );
};
