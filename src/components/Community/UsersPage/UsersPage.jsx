import React, { useState } from 'react';
import './UsersPage.css'; // Import CSS file if needed
import { Users } from '../dummyData.js'; // Import Users array from dummyData.js

function UsersPage() { 
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="userContainer">
      <div className="userList">
        {Users.map((user, index) => (
          <div 
            key={index} 
            className="userRow"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{ backgroundColor: hoveredIndex === index ? '#107fac' : '' }}
          >
            <img className="userProfilePicture" src={user.profilePicture} alt={user.username} />
            <div className="userDetails">
              <h2 className="username" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                {user.username}
              </h2>
              <p className="userId" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                ID: {user.id}
              </p>
              <p className="userOccupation" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Occupation: {user.occupation}
              </p>
              <p className="userAge" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Age: {user.age}
              </p>
              <p className="userLivingPlace" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Living Place: {user.livingPlace}
              </p>
              <p className="userJoinedIn" style={{ color: hoveredIndex === index ? 'white' : 'black' }}>
                Joined In: {user.joinedIn}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default UsersPage;
