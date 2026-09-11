import { BrowserRouter, Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import AuthPage from "./pages/AuthPage";
import OnboardingPage from "./pages/OnboardingPage";
import DashboardPage from "./pages/DashboardPage";
import RecommendationsPage from "./pages/RecommendationsPage";
import MealDetailsPage from "./pages/MealDetailsPage";
import SavedMealsPage from "./pages/SavedMealsPage";


import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<LandingPage />} />

        <Route path="/auth" element={<AuthPage />} />

        <Route
          path="/onboarding"
          element={<OnboardingPage />}
        />

        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="/dashboard"
          element={<DashboardPage />}
        />
        <Route
          path="/dashboard/recommendations"
          element={<RecommendationsPage />}
        />

        <Route
          path="/meal/:mealName"
          element={<MealDetailsPage />}
        />
        <Route
          path="/dashboard/saved"
          element={<SavedMealsPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;