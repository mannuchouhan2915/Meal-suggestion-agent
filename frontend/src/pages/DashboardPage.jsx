import DashboardSidebar from "../components/DashboardSidebar";
import { useNavigate } from "react-router-dom";

function DashboardPage() {
const navigate = useNavigate();
  const meals = [
    {
      name: "Paneer Tikka Bowl",
      cuisine: "Indian",
      calories: "520 kcal",
      protein: "32g",
      time: "25 min",
      tag: "High Protein",
      emoji: "🍛"
    },
    {
      name: "Creamy Pesto Pasta",
      cuisine: "Italian",
      calories: "610 kcal",
      protein: "21g",
      time: "30 min",
      tag: "Quick & Easy",
      emoji: "🍝"
    },
    {
      name: "Fresh Buddha Bowl",
      cuisine: "Healthy",
      calories: "440 kcal",
      protein: "18g",
      time: "15 min",
      tag: "Healthy Choice",
      emoji: "🥗"
    }
  ];

  return (
    <div className="dashboard-page">

      <DashboardSidebar />

      <main className="dashboard-main">

        {/* TOP BAR */}

        <header className="dashboard-topbar">

          <div>
            <p className="dashboard-greeting">
              Good morning
            </p>

            <h1>
              What are you eating today?
            </h1>
          </div>

          <div className="dashboard-profile">
            <div className="profile-avatar">
              M
            </div>

            <div>
              <strong>Manshvee</strong>
              <span>Healthy Explorer</span>
            </div>
          </div>

        </header>


        {/* DAILY SUMMARY */}

        <section className="dashboard-summary">

          <div className="summary-content">

            <span className="summary-label">
              YOUR DAILY FOCUS
            </span>

            <h2>
              Eat better, feel better.
            </h2>

            <p>
              Here are meals selected based on
              your preferences and goals.
            </p>

          </div>

          <div className="summary-stats">

            <div>
              <strong>1,850</strong>
              <span>Daily kcal</span>
            </div>

            <div>
              <strong>95g</strong>
              <span>Protein goal</span>
            </div>

            <div>
              <strong>3</strong>
              <span>Meals today</span>
            </div>

          </div>

        </section>


        {/* RECOMMENDATIONS */}

        <section className="recommendation-section">

          <div className="section-heading">

            <div>
              <span>PERSONALIZED FOR YOU</span>
              <h2>Today's Recommendations</h2>
            </div>

           <button onClick={() => navigate("/dashboard/recommendations")}>
  View all →
</button>

          </div>


          <div className="meal-grid">

            {meals.map((meal) => (

              <div className="meal-card" key={meal.name}>

                <div className="meal-image">

                  <span className="meal-emoji">
                    {meal.emoji}
                  </span>

                  <span className="meal-tag">
                    {meal.tag}
                  </span>

                  <button className="save-button">
                    ♡
                  </button>

                </div>


                <div className="meal-info">

                  <span className="meal-cuisine">
                    {meal.cuisine}
                  </span>

                  <h3>
                    {meal.name}
                  </h3>

                  <div className="meal-meta">

                    <span>
                      🔥 {meal.calories}
                    </span>

                    <span>
                      💪 {meal.protein}
                    </span>

                    <span>
                      ⏱ {meal.time}
                    </span>

                  </div>

                  <button className="view-meal-button">
                    View Recipe →
                  </button>

                </div>

              </div>

            ))}

          </div>

        </section>


        {/* QUICK ACTIONS */}

        <section className="quick-section">

          <h2>Quick Actions</h2>

          <div className="quick-grid">

            <div className="quick-card">
              <span>✨</span>

              <div>
                <h3>Get New Suggestions</h3>
                <p>
                  Discover something different today.
                </p>
              </div>

              <strong>→</strong>
            </div>


            <div className="quick-card">
              <span>♡</span>

              <div>
                <h3>View Saved Meals</h3>
                <p>
                  Your favorite recipes in one place.
                </p>
              </div>

              <strong>→</strong>
            </div>

          </div>

        </section>

      </main>

    </div>
  );
}

export default DashboardPage;