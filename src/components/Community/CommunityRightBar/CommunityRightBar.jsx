import React from "react";
import { Stocks } from "../dummyData";
import MostDiscussed from "../MostDiscussed/MostDiscussed";
import '../Feed/Feed.css';

const MostDiscussedRightbar = () => {
  return (
    <>
      <h4 className="rightbarTitle" style={{ fontWeight: 'bold', paddingBottom: '20px' }}>Most Discussed</h4>
      <div className="rightbarCompanyList">
        {Stocks.map((stock) => (
          <div className="smallbox" key={stock.id}> {/* Wrap each MostDiscussed component with a div having the class box */}
            <MostDiscussed stock={stock} />
          </div>
        ))}
      </div>
    </>
  );
};

const Rightbar = () => {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <MostDiscussedRightbar />
      </div>
    </div>
  );
};

export default Rightbar;
