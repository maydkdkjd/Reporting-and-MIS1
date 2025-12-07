import React, { useState, useEffect } from "react";
import Navbar from "./Utils/Navbar";
import Sidebar from "./Utils/sidebar";
import Dashboard from "./Component/Dashboard";
import "./App.css";

const App = () => {
    const [api, setApi] = useState(null);
    const [search, setSearch] = useState("");

    return (
        <div className="dashboard-container">

            {/* Sidebar */}
            <Sidebar />

            {/* Main Page */}
            <div className="main-content">

                {/* Top Bar */}
                <Navbar />

                {/* Content Grid */}
                <Dashboard />
            </div>
        </div>
    );
};

export default App;
