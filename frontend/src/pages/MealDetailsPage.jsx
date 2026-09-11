import { useState } from "react";
import meals from "../data/meals";
import { useParams, useNavigate } from "react-router-dom";
import DashboardSidebar from "../components/DashboardSidebar";
import "./MealDetailsPage.css";

function MealDetailsPage() {

    const { mealName } = useParams();
    const navigate = useNavigate();
    const [savedMeals, setSavedMeals] = useState(() => {
        const saved = localStorage.getItem("savedMeals");
        return saved ? JSON.parse(saved) : [];
    });
    

const meal = meals.find((item) => item.id === mealName);    
const isSaved = savedMeals.includes(mealName);

    const handleSaveMeal = () => {
        let updatedMeals;

        if (isSaved) {
            updatedMeals = savedMeals.filter(
                (name) => name !== mealName
            );
        } else {
            updatedMeals = [...savedMeals, mealName];
        }

        setSavedMeals(updatedMeals);

        localStorage.setItem(
            "savedMeals",
            JSON.stringify(updatedMeals)
        );
    };

    if (!meal) {
        return (
            <div className="meal-details-page">

                <DashboardSidebar />

                <main className="meal-details-main">

                    <h1>Meal not found</h1>

                    <button
                        className="back-button"
                        onClick={() => navigate("/dashboard/recommendations")}
                    >
                        ← Back to Recommendations
                    </button>

                </main>

            </div>
        );
    }

    return (
        <div className="meal-details-page">

            <DashboardSidebar />

            <main className="meal-details-main">

                <button
                    className="back-button"
                    onClick={() => navigate("/dashboard/recommendations")}
                >
                    ← Back to Recommendations
                </button>

                <section className="meal-details-header">

                    <div className="meal-details-image">
                        {meal.emoji}
                    </div>

                    <div className="meal-details-content">

                        <span>
                            {meal.cuisine.toUpperCase()} • {meal.tag.toUpperCase()}
                        </span>

                        <h1>{meal.name}</h1>

                        <p>{meal.description}</p>

                        <div className="meal-details-stats">

                            <div>
                                <strong>{meal.calories}</strong>
                                <span>Calories</span>
                            </div>

                            <div>
                                <strong>{meal.protein}</strong>
                                <span>Protein</span>
                            </div>

                            <div>
                                <strong>{meal.time}</strong>
                                <span>Cooking Time</span>
                            </div>

                        </div>

                        <button
                            className="save-meal-button"
                            onClick={handleSaveMeal}
                        >
                            {isSaved ? "♥ Saved" : "♡ Save Meal"}
                        </button>

                    </div>

                </section>


                <section className="recipe-section">

                    <div>

                        <h2>Ingredients</h2>

                        <ul>
                            {meal.ingredients.map((ingredient) => (
                                <li key={ingredient}>
                                    {ingredient}
                                </li>
                            ))}
                        </ul>

                    </div>


                    <div>

                        <h2>How to Prepare</h2>

                        <ol>
                            {meal.instructions.map((instruction) => (
                                <li key={instruction}>
                                    {instruction}
                                </li>
                            ))}
                        </ol>

                    </div>

                </section>

            </main>

        </div>
    );
}

export default MealDetailsPage;