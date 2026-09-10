import { useState } from "react";

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
    const meals = {
        "paneer-tikka-bowl": {
            name: "Paneer Tikka Bowl",
            cuisine: "Indian",
            calories: "520",
            protein: "32g",
            time: "25 min",
            tag: "High Protein",
            emoji: "🍛",
            description:
                "A nutritious and protein-rich bowl made with delicious paneer tikka and fresh vegetables.",
            ingredients: [
                "Paneer",
                "Capsicum",
                "Onion",
                "Tomato",
                "Yogurt",
                "Indian spices"
            ],
            instructions: [
                "Marinate the paneer with yogurt and spices.",
                "Cook paneer and vegetables until golden.",
                "Prepare the bowl with fresh vegetables.",
                "Add the cooked paneer tikka on top.",
                "Serve fresh and enjoy."
            ]
        },

        "creamy-pesto-pasta": {
            name: "Creamy Pesto Pasta",
            cuisine: "Italian",
            calories: "610",
            protein: "21g",
            time: "30 min",
            tag: "Quick & Easy",
            emoji: "🍝",
            description:
                "Creamy pasta tossed with flavorful pesto and fresh ingredients for a satisfying meal.",
            ingredients: [
                "Pasta",
                "Pesto sauce",
                "Cream",
                "Garlic",
                "Parmesan cheese",
                "Mixed herbs"
            ],
            instructions: [
                "Boil the pasta until tender.",
                "Prepare the creamy pesto sauce.",
                "Add cooked pasta to the sauce.",
                "Mix well and add parmesan cheese.",
                "Serve warm with fresh herbs."
            ]
        },

        "fresh-buddha-bowl": {
            name: "Fresh Buddha Bowl",
            cuisine: "Healthy",
            calories: "440",
            protein: "18g",
            time: "15 min",
            tag: "Healthy Choice",
            emoji: "🥗",
            description:
                "A colorful and balanced bowl packed with fresh vegetables, healthy ingredients and nutrients.",
            ingredients: [
                "Mixed greens",
                "Chickpeas",
                "Carrot",
                "Cucumber",
                "Avocado",
                "Lemon dressing"
            ],
            instructions: [
                "Wash and prepare all vegetables.",
                "Arrange mixed greens in a bowl.",
                "Add chickpeas and chopped vegetables.",
                "Top with avocado.",
                "Drizzle with lemon dressing and serve."
            ]
        }
    };

    const meal = meals[mealName];
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