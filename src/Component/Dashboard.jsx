import React from "react";
import "../CSS/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      {/* Top-right control bar */}
      <div className="dashboard-controls">
        <button className="control-btn">Download Dashboard</button>
        <button className="control-btn">Set as Default</button>
        <button className="control-btn secondary-btn">Reset</button>
      </div>

      {/* QlikSense Display */}
      <div className="dashboard-display">
        <iframe
          title="qlik-dashboard"
          src="https://cikvapvurzr36lf.in.qlikcloud.com/sense/app/3c65a6ac-4ff1-4dc7-9114-d126d276c13f/sheet/pzvFxzM/state/edit/hubUrl/%2Fanalytics%2Fhome"
          className="qlik-iframe"
        ></iframe>
      </div>

    </div>
  );
};

export default Dashboard;
