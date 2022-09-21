import React from "react";
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
                <li>30 May 2022</li>
                <li>.</li>
                <li><button  className="submission-btn">Submissions OPEN</button></li>
                <li>.</li>
                <li>11:39</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
