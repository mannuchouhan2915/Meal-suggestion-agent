function Hero() {
    return (
        <section className='hero' id='home'>
            {/* leftside  */}
            <div className='hero-content'>
                <div className='hero-badge'>
                    🌟AI Powered Meal Suggestions
                </div>
                <h1> Better Food
                    <br />
                    <span>Bigger You</span>
                </h1>
                <p className='hero-description'>Personalized meal suggestions powere by AI, <br />for a healthier, happier you.</p>
                <div className='hero-features'>
                    <div className='hero-feature'>
                        <span>👤</span>
                        <p>Personalized <br />Recommendations</p>
                         </div>
                        <div className='hero-feature'>
                            <span>⏱️</span>
                            <p>Nutrition <br />Focused</p>
                        </div>
                        <div className='hero-feature'>
                        <span>📱</span>
                        <p>Quick and Easy<br />Recipes</p>
                        </div>
                   
                    <div className='hero-feature'>
                        <span>🫶</span>
                        <p>Better Health <br />& Energy</p>
                    </div>
                </div>
                <div className='hero-buttons'>
                    <button className='hero-primary-btn'>
                        Get Started ➡️
                    </button>
                    <button className='hero-secondary-btn'>
                        ▶️&nbsp; Watch How It Works
                    </button>
                </div>
            </div>
            {/* Right Side */}
            <div className="hero-visual">

                <div className="food-circle">
                    🥗
                </div>

                <div className="nutrition-card protein-card">
                    <span>💪</span>
                    <div>
                        <small>High Protein</small>
                        <strong>42g</strong>
                    </div>
                </div>

                <div className="nutrition-card calorie-card">
                    <span>🔥</span>
                    <div>
                        <strong>520 kcal</strong>
                        <small>Perfect for your goal</small>
                    </div>
                </div>

                <div className="healthy-text">
                    Healthy choices
                    <br />
                    made easy!
                </div>


            </div>
        </section>



    );
}
export default Hero;