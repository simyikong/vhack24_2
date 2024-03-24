import React, { useState } from 'react';
import './Groups.css'; // Import CSS file for Groups
import { groups } from './../dummyData.js'; // Import groups array from dummyData.js 

function Groups() { 
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="groupContainer">
      <div className="groupList">
        <br></br>
        {groups.map((group, index) => (
          <div 
            key={index} 
            className="groupRow"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ backgroundColor: hoveredIndex === index ? '#107fac' : '' }}
          >
            <img className="groupCover" src={group.cover} alt={group.name} />
            <div className="groupDetails">
              <h2 className="groupName" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                {group.name}
              </h2>
              <p className="groupMemberCount" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Members: {group.members}
              </p>
              <p className="groupCreated" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Created: {group.created}
              </p>
              <p className="groupDescription" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                {group.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Groups;
