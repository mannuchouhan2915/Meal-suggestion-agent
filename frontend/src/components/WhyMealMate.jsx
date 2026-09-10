function WhyMealMate(){
    const features=[
        {
            icon:'👤',
            title:'Personalized for you',
            description:'Meal suggestions based on your goals, preferences , and lifestyle.'
        },
        {
            icon:'🍅',
            title:'Balanced Nutrition',
            description :'Get the right balance of calories, protein , carbs, and other nutrients.'
        },
        {
            icon:'⏱️',
            title:'Save Time',
            description :'Discover quick and easy recipes that fit your busy lifestyle.'
        },
        {
            icon:'🫶',
            title:'More Variety',
            description:'Explore different cuisines and discover meals you"ll actually enjoy'
        }
    ];
     return (
    <section className="why-section" id="features">

      <div className="why-intro">

        <div className="section-label">
          <span></span>
          Why MealMate?
        </div>

        <h2>
          Your Personal AI
          <br />
          Food Companion
        </h2>

        <p>
          We analyze your preferences, goals, and dietary needs
          to suggest meals that are not just delicious,
          but also right for you.
        </p>

        <button className="learn-more-btn">
          Learn More →
        </button>

      </div>


      <div className="feature-grid">

        {features.map((feature, index) => (
          <div className="feature-card" key={index}>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
}

export default WhyMealMate;
