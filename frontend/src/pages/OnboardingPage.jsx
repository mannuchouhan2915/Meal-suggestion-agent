import { useState } from "react";
import { useNavigate } from "react-router-dom";

function OnboardingPage() {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);

  const [preferences, setPreferences] = useState({
    age: "",
    region: "",
    diet: "",
    allergies: [],
    cuisines: [],
    goal: "",
    cookingTime: ""
  });

  const totalSteps = 6;

  const updatePreference = (key, value) => {
    setPreferences((prev) => ({
      ...prev,
      [key]: value
    }));
  };

  const toggleMultiple = (key, value) => {
    setPreferences((prev) => {
      const currentValues = prev[key];

      if (currentValues.includes(value)) {
        return {
          ...prev,
          [key]: currentValues.filter((item) => item !== value)
        };
      }

      return {
        ...prev,
        [key]: [...currentValues, value]
      };
    });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      localStorage.setItem(
        "mealAtEasePreferences",
        JSON.stringify(preferences)
      );

      console.log("User Preferences:", preferences);

      navigate("/dashboard");
    }
  };

  const previousStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="onboarding-page">

      <header className="onboarding-header">
        <div className="onboarding-logo">
          🥗 MealAtEase
        </div>

        <span>
          Step {step} of {totalSteps}
        </span>
      </header>

      <div className="progress-container">
        <div
          className="progress-bar"
          style={{
            width: `${(step / totalSteps) * 100}%`
          }}
        />
      </div>

      <main className="onboarding-content">

        {step === 1 && (
          <StepOne
            preferences={preferences}
            updatePreference={updatePreference}
          />
        )}

        {step === 2 && (
          <StepTwo
            selected={preferences.diet}
            updatePreference={updatePreference}
          />
        )}

        {step === 3 && (
          <StepThree
            selected={preferences.allergies}
            toggleMultiple={toggleMultiple}
          />
        )}

        {step === 4 && (
          <StepFour
            selected={preferences.cuisines}
            toggleMultiple={toggleMultiple}
          />
        )}

        {step === 5 && (
          <StepFive
            selected={preferences.goal}
            updatePreference={updatePreference}
          />
        )}

        {step === 6 && (
          <StepSix
            selected={preferences.cookingTime}
            updatePreference={updatePreference}
          />
        )}

        <div className="onboarding-navigation">

          {step > 1 && (
            <button
              className="back-button"
              onClick={previousStep}
            >
              ← Back
            </button>
          )}

          <button
            className="next-button"
            onClick={nextStep}
          >
            {step === totalSteps
              ? "Finish →"
              : "Continue →"}
          </button>

        </div>

      </main>
    </div>
  );
}


/* STEP 1 */

function StepOne({ preferences, updatePreference }) {
  return (
    <div className="onboarding-step">

      <span className="step-emoji">👋</span>

      <h1>Let's get to know you</h1>

      <p>
        This helps us create meal recommendations
        that actually fit your lifestyle.
      </p>

      <div className="form-grid">

        <div className="form-field">
          <label>Age</label>

          <input
            type="number"
            placeholder="Your age"
            value={preferences.age}
            onChange={(e) =>
              updatePreference("age", e.target.value)
            }
          />
        </div>

        <div className="form-field">
          <label>Country / Region</label>

          <input
            type="text"
            placeholder="e.g. India"
            value={preferences.region}
            onChange={(e) =>
              updatePreference("region", e.target.value)
            }
          />
        </div>

      </div>

    </div>
  );
}


/* STEP 2 */

function StepTwo({ selected, updatePreference }) {

  const diets = [
    "No Preference",
    "Vegetarian",
    "Vegan",
    "Non-Vegetarian",
    "Pescatarian"
  ];

  return (
    <div className="onboarding-step">

      <span className="step-emoji">🥗</span>

      <h1>What's your diet?</h1>

      <p>
        Choose the option that best describes
        how you normally eat.
      </p>

      <div className="option-grid">

        {diets.map((diet) => (

          <button
            key={diet}
            className={`option-card ${
              selected === diet ? "selected" : ""
            }`}
            onClick={() =>
              updatePreference("diet", diet)
            }
          >
            {diet}
          </button>

        ))}

      </div>

    </div>
  );
}


/* STEP 3 */

function StepThree({ selected, toggleMultiple }) {

  const allergies = [
    "None",
    "Milk",
    "Eggs",
    "Peanuts",
    "Tree Nuts",
    "Gluten",
    "Soy",
    "Fish",
    "Shellfish"
  ];

  return (
    <div className="onboarding-step">

      <span className="step-emoji">⚠️</span>

      <h1>Any food allergies?</h1>

      <p>
        Select anything you need to avoid.
      </p>

      <div className="option-grid">

        {allergies.map((item) => (

          <button
            key={item}
            className={`option-card ${
              selected.includes(item)
                ? "selected"
                : ""
            }`}
            onClick={() =>
              toggleMultiple("allergies", item)
            }
          >
            {item}
          </button>

        ))}

      </div>

    </div>
  );
}


/* STEP 4 */

function StepFour({ selected, toggleMultiple }) {

  const cuisines = [
    "Indian",
    "Italian",
    "Mexican",
    "Chinese",
    "Japanese",
    "Mediterranean",
    "Thai",
    "American"
  ];

  return (
    <div className="onboarding-step">

      <span className="step-emoji">🌎</span>

      <h1>What cuisines do you love?</h1>

      <p>
        Pick your favorites. You can choose multiple.
      </p>

      <div className="option-grid">

        {cuisines.map((cuisine) => (

          <button
            key={cuisine}
            className={`option-card ${
              selected.includes(cuisine)
                ? "selected"
                : ""
            }`}
            onClick={() =>
              toggleMultiple("cuisines", cuisine)
            }
          >
            {cuisine}
          </button>

        ))}

      </div>

    </div>
  );
}


/* STEP 5 */

function StepFive({ selected, updatePreference }) {

  const goals = [
    "Maintain Weight",
    "Lose Weight",
    "Gain Weight",
    "Build Muscle",
    "Eat Healthier",
    "Improve Energy"
  ];

  return (
    <div className="onboarding-step">

      <span className="step-emoji">🎯</span>

      <h1>What's your goal?</h1>

      <p>
        We'll use this to personalize
        your recommendations.
      </p>

      <div className="option-grid">

        {goals.map((goal) => (

          <button
            key={goal}
            className={`option-card ${
              selected === goal ? "selected" : ""
            }`}
            onClick={() =>
              updatePreference("goal", goal)
            }
          >
            {goal}
          </button>

        ))}

      </div>

    </div>
  );
}


/* STEP 6 */

function StepSix({ selected, updatePreference }) {

  const times = [
    "Under 15 minutes",
    "15–30 minutes",
    "30–60 minutes",
    "I enjoy cooking"
  ];

  return (
    <div className="onboarding-step">

      <span className="step-emoji">👨‍🍳</span>

      <h1>How much time do you have?</h1>

      <p>
        Tell us how much time you normally
        spend cooking.
      </p>

      <div className="option-grid">

        {times.map((time) => (

          <button
            key={time}
            className={`option-card ${
              selected === time ? "selected" : ""
            }`}
            onClick={() =>
              updatePreference("cookingTime", time)
            }
          >
            {time}
          </button>

        ))}

      </div>

    </div>
  );
}

export default OnboardingPage;