function HowItWorks() {
  const steps = [
    {
      number: "01",
      icon: "👤",
      title: "Tell Us Your Preferences",
      description:
        "Choose your dietary preferences, allergies, goals, favorite cuisines, and cooking preferences."
    },
    {
      number: "02",
      icon: "✨",
      title: "Get AI Recommendations",
      description:
        "Our recommendation system analyzes your preferences and finds meals that fit you."
    },
    {
      number: "03",
      icon: "🍽️",
      title: "Explore & Choose",
      description:
        "Browse your personalized meals, check nutrition, ingredients, and recipes."
    },
    {
      number: "04",
      icon: "📈",
      title: "Enjoy & Track",
      description:
        "Save meals, mark them as cooked, and build a better understanding of what you enjoy."
    }
  ];

  return (
    <section className="how-section" id="how-it-works">

      <div className="how-header">

        <div className="section-label">
          <span></span>
          How It Works
        </div>

        <h2>Just 4 Simple Steps</h2>

        <p>
          Getting personalized meal suggestions is easier than
          deciding what to eat yourself.
        </p>

      </div>


      <div className="steps-container">

        {steps.map((step, index) => (
          <div className="step" key={step.number}>

            <div className="step-number">
              {step.number}
            </div>

            <div className="step-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.description}</p>

            {index < steps.length - 1 && (
              <div className="step-arrow">
                →
              </div>
            )}

          </div>
        ))}

      </div>

    </section>
  );
}

export default HowItWorks;