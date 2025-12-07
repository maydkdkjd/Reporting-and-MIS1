import React from "react";
import "../CSS/Navbar.css";

const Navbar = () => {

  const handleModuleSelect = (e) => {
    const module = e.target.value;
    if (module) console.log("Module selected:", module);
  };

  const handleCreateReport = (e) => {
    const report = e.target.value;
    if (report) console.log("Create report:", report);
  };

  return (
    <div className="gov-navbar">

      {/* 1. Select Module */}
      <div className="nav-item">
        <select className="gov-control" onChange={handleModuleSelect}>
          <option value="">Select Module</option>
          <option value="module1">ITR</option>
          <option value="module2">Appeal</option>
          <option value="module3">OLTAS</option>
        </select>
      </div>

      {/* Right-side actions */}
      <div className="nav-actions">

        {/* 2. View Standard Reports */}
        <div className="nav-item">
          <button
            className="gov-control gov-btn"
            onClick={() => console.log("View Reports clicked")}
          >
            View Standard Reports
          </button>
        </div>

        {/* 3. Create Report */}
        <div className="nav-item">
          <select className="gov-control" onChange={handleCreateReport}>
            <option value="">Create Report</option>
            <option value="blank">Blank Report</option>
            <option value="templateA">Template A</option>
            <option value="templateB">Template B</option>
          </select>
        </div>

        {/* 4. Audit Logging */}
        <div className="nav-item">
          <button
            className="gov-control gov-btn"
            onClick={() => console.log("Audit Logging clicked")}
          >
            Audit Logging
          </button>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
