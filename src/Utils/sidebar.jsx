import "../CSS/Sidebar.css"
const Sidebar = () => {
    return (
        <aside className="sidebar">
            
            {/* Logo Section */}
            <div className="sidebar-logo">
                <img 
                    src="/Images/itba-logo.png"  // <-- put your real logo here
                    alt="Government Logo" 
                />
                <h2>ITBA 2.0</h2>
            </div>

            <ul className="sidebar-menu">
                <li>Income Tax Act</li>
                <li>Black Money Act</li>
                <li className="active">Reporting and Visualization</li>
            </ul>
        </aside>
    )
}

export default Sidebar;
