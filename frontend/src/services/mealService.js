import meals from "../data/meals";

export function getMeals() {
  return meals;
}

export function getMealById(id) {
  return meals.find((meal) => meal.id === id);
}

export function getRecommendations() {
  return meals;
}