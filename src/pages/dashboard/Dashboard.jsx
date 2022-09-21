import React from "react";
import VideoCard from "../../components/videoCard/VideoCard";
import './Dashboard.css'
const Dashboard = () => {
  return (
    <div>
      <div className="upper-section">
        <div className="title">
          <h2>Today’s leaderboard</h2>
        </div>
        <div className="date-filter">
            <ul>
                <li className="date-text">30 May 2022</li>
                <li className="dote">.</li>
                <li><button className="submission-btn">Submissions OPEN</button></li>
                <li className="dote">.</li>
                <li className="date-text">11:39</li>
            </ul>
        </div>
      </div>

      <div className="video-cards">
        <div>
            <ul className="cards-title">
                <li># Title</li>
                <li>Author</li>
                <li>Most Liked</li>
            </ul>
        </div>
        <VideoCard/>
      </div>
    </div>
  );
};

export default Dashboard;
