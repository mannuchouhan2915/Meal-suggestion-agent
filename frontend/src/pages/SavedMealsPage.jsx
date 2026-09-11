import meals from "../data/meals";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import "./SavedMealsPage.css";

function SavedMealsPage() {
    const navigate = useNavigate();



    const [savedMeals, setSavedMeals] = useState(() => {
        const saved = localStorage.getItem("savedMeals");
        return saved ? JSON.parse(saved) : [];
    });

    const savedMealDetails = savedMeals
        .map((mealId) =>
            meals.find((meal) => meal.id === mealId)
        )
        .filter(Boolean);

    const handleRemove = (mealId) => {
        const updatedMeals = savedMeals.filter(
            (id) => id !== mealId
        );

        setSavedMeals(updatedMeals);

        localStorage.setItem(
            "savedMeals",
            JSON.stringify(updatedMeals)
        );
    };

    return (
        <div className="saved-meals-page">
            <DashboardSidebar />

            <main className="saved-meals-main">

                <header className="saved-meals-header">
                    <span>YOUR COLLECTION</span>
                    <h1>Saved Meals</h1>
                    <p>
                        Your favorite meals, saved in one place.
                    </p>
                </header>

                {savedMealDetails.length === 0 ? (
                    <section className="empty-saved-meals">
                        <div className="empty-icon">♡</div>
                        <h2>No saved meals yet</h2>
                        <p>
                            Save meals you love and they will appear here.
                        </p>

                        <button
                            onClick={() =>
                                navigate("/dashboard/recommendations")
                            }
                        >
                            Explore Meals →
                        </button>
                    </section>
                ) : (
                    <section className="saved-meals-section">

                        <div className="saved-meals-heading">
                            <h2>Your Saved Meals</h2>
                            <span>
                                {savedMealDetails.length} saved
                            </span>
                        </div>

                        <div className="saved-meals-grid">
                            {savedMealDetails.map((meal) => {

                                const mealId = meal.id;

                                return (
                                    <div
                                        className="saved-meal-card"
                                        key={meal.name}
                                    >
                                        <div className="saved-meal-image">

                                            <span className="saved-meal-tag">
                                                {meal.tag}
                                            </span>

                                            <span className="saved-meal-emoji">
                                                {meal.emoji}
                                            </span>

                                            <button
                                                className="remove-save-button"
                                                onClick={() =>
                                                    handleRemove(mealId)
                                                }
                                            >
                                                ♥
                                            </button>

                                        </div>

                                        <div className="saved-meal-info">

                                            <span className="saved-meal-cuisine">
                                                {meal.cuisine}
                                            </span>

                                            <h3>{meal.name}</h3>

                                            <div className="saved-meal-meta">
                                                <span>🔥 {meal.calories} kcal</span>
                                                <span>💪 {meal.protein}</span>
                                                <span>⏱ {meal.time}</span>
                                            </div>

                                            <button
                                                className="saved-view-button"
                                                onClick={() =>
                                                    navigate(
                                                        `/meal/${mealId}`
                                                    )
                                                }
                                            >
                                                View Recipe →
                                            </button>

                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                    </section>
                )}

            </main>
        </div>
    );
}

export default SavedMealsPage;