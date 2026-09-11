import { NavLink } from "react-router-dom";

function DashboardSidebar() {
  return (
    <aside className="dashboard-sidebar">

      <div className="dashboard-logo">
        <span>🥗</span>
        <span>MealAtEase</span>
      </div>

      <nav className="sidebar-nav">

  <NavLink
    to="/dashboard"
    end
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
    <span>⌂</span>
    Dashboard
  </NavLink>

  <NavLink
    to="/dashboard/recommendations"
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
    <span>✨</span>
    Recommendations
  </NavLink>

  <NavLink
    to="/dashboard/saved"
    className={({ isActive }) =>
      isActive ? "sidebar-link active" : "sidebar-link"
    }
  >
    <span>♡</span>
    Saved Meals
  </NavLink>

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