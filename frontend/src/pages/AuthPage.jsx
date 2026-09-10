import { useState } from "react";

function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-page">

      {/* Left Section */}

      <div className="auth-visual">

        <div className="auth-brand">
          🥗 MealAtEase
        </div>

        <div className="auth-message">

          <span>✨ Your food. Your way.</span>

          <h1>
            Eat better.
            <br />
            Live better.
          </h1>

          <p>
            Personalized meal suggestions designed
            around your taste, goals and lifestyle.
          </p>

        </div>

      </div>


      {/* Right Section */}

      <div className="auth-container">

        <div className="auth-card">

          <div className="auth-header">

            <div className="auth-logo">
              🥗
            </div>

            <h2>
              {isLogin
                ? "Welcome Back"
                : "Create Your Account"}
            </h2>

            <p>
              {isLogin
                ? "Sign in to continue to MealAtEase"
                : "Start your personalized food journey"}
            </p>

          </div>


          <form>

            {!isLogin && (
              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  placeholder="Enter your name"
                />

              </div>
            )}


            <div className="input-group">

              <label>Email Address</label>

              <input
                type="email"
                placeholder="you@example.com"
              />

            </div>


            <div className="input-group">

              <label>Password</label>

              <input
                type="password"
                placeholder="Enter your password"
              />

            </div>


            {isLogin && (
              <div className="forgot-password">
                <a href="#">Forgot password?</a>
              </div>
            )}


            <button
              type="button"
              className="auth-button"
            >
              {isLogin ? "Log In →" : "Create Account →"}
            </button>

          </form>


          <div className="auth-divider">
            <span>or</span>
          </div>


          <button className="google-button">
            Continue with Google
          </button>


          <p className="auth-switch">

            {isLogin
              ? "Don't have an account?"
              : "Already have an account?"}

            <button
              type="button"
              onClick={() => setIsLogin(!isLogin)}
            >
              {isLogin ? " Sign Up" : " Log In"}
            </button>

          </p>

        </div>

      </div>

    </div>
  );
}

export default AuthPage;