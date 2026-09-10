import { Link } from "react-router-dom";

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">

      <div className="dashboard-logo">
        <span>🥗</span>
        <span>MealAtEase</span>
      </div>

      <nav className="sidebar-nav">

        <Link to="/dashboard" className="sidebar-link active">
          <span>⌂</span>
          Dashboard
        </Link>

        <a href="#" className="sidebar-link">
          <span>✨</span>
          Recommendations
        </a>

        <a href="#" className="sidebar-link">
          <span>♡</span>
          Saved Meals
        </a>

        <a href="#" className="sidebar-link">
          <span>📊</span>
          My Progress
        </a>

        <a href="#" className="sidebar-link">
          <span>⚙</span>
          Preferences
        </a>

      </nav>

      <div className="sidebar-bottom">

        <a href="#" className="sidebar-link">
          <span>?</span>
          Help
        </a>

        <a href="/" className="sidebar-link">
          <span>↪</span>
          Log Out
        </a>

      </div>

    </aside>
  );
}

export default DashboardSidebar;