import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import "./RecommendationsPage.css";
function RecommendationsPage() {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const [selectedFilter, setSelectedFilter] = useState("All");
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
        },
        {
            name: "Chickpea Salad",
            cuisine: "Healthy",
            calories: "390 kcal",
            protein: "20g",
            time: "15 min",
            tag: "High Protein",
            emoji: "🥙"
        },
        {
            name: "Veggie Fried Rice",
            cuisine: "Asian",
            calories: "480 kcal",
            protein: "16g",
            time: "20 min",
            tag: "Quick & Easy",
            emoji: "🍚"
        },
        {
            name: "Masala Oats Bowl",
            cuisine: "Indian",
            calories: "350 kcal",
            protein: "15g",
            time: "10 min",
            tag: "Healthy Choice",
            emoji: "🥣"
        }
    ];
    const filteredMeals = meals.filter((meal) => {

        const matchesSearch =
            meal.name.toLowerCase().includes(search.toLowerCase()) ||
            meal.cuisine.toLowerCase().includes(search.toLowerCase());

        const matchesFilter =
            selectedFilter === "All" ||
            meal.tag === selectedFilter ||
            meal.cuisine === selectedFilter;

        return matchesSearch && matchesFilter;
    });
    return (
        <div className="recommendations-page">

            <DashboardSidebar />

            <main className="recommendations-main">

                <header className="recommendations-header">
                    <div>
                        <span>PERSONALIZED FOR YOU</span>

                        <h1>Find your next meal</h1>

                        <p>
                            Discover meals based on your preferences,
                            goals and nutritional needs.
                        </p>
                    </div>
                </header>
                <section className="recommendation-tools">

                    <div className="search-box">
                        <span>🔍</span>
                        <input
                            type="text"
                            placeholder="Search meals..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </div>

                    <div className="filter-buttons">

                        {["All", "High Protein", "Quick & Easy", "Healthy", "Indian"].map(
                            (filter) => (
                                <button
                                    key={filter}
                                    className={selectedFilter === filter ? "active" : ""}
                                    onClick={() => setSelectedFilter(filter)}
                                >
                                    {filter}
                                </button>
                            )
                        )}

                    </div>

                </section>
                <section className="all-meals-section">

                    <div className="all-meals-heading">
                        <div>
                            <span>YOUR PERSONALIZED PICKS</span>
                            <h2>Recommended Meals</h2>
                        </div>

                        <p>{filteredMeals.length} meals found</p>
                    </div>

                    <div className="recommendation-meal-grid">

                        {filteredMeals.map((meal) => (

                            <div className="recommendation-meal-card" key={meal.name}>

                                <div className="recommendation-meal-image">

                                    <span className="recommendation-meal-tag">
                                        {meal.tag}
                                    </span>

                                    <button className="recommendation-save-button">
                                        ♡
                                    </button>

                                    <span className="recommendation-meal-emoji">
                                        {meal.emoji}
                                    </span>

                                </div>

                                <div className="recommendation-meal-info">

                                    <span className="recommendation-meal-cuisine">
                                        {meal.cuisine}
                                    </span>

                                    <h3>{meal.name}</h3>

                                    <div className="recommendation-meal-meta">
                                        <span>🔥 {meal.calories}</span>
                                        <span>💪 {meal.protein}</span>
                                        <span>⏱ {meal.time}</span>
                                    </div>

                                    <button
  className="recommendation-view-button"
  onClick={() =>
    navigate(`/meal/${meal.name.toLowerCase().replaceAll(" ", "-")}`)
  }
>
  View Recipe →
</button>

                                </div>

                            </div>

                        ))}

                    </div>

                </section>
            </main>

        </div>
    );
}

export default RecommendationsPage;