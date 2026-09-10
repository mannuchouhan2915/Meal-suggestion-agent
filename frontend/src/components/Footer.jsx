function Footer() {
  return (
    <footer className="footer">

      <div className="footer-main">

        {/* Brand */}
        <div className="footer-brand">

          <div className="footer-logo">
            <span>🥗</span>
            <span>MealAtEase</span>
          </div>

          <p>
            Your personal AI food companion,
            <br />
            helping you eat better every day.
          </p>

        </div>


        {/* Product */}
        <div className="footer-column">

          <h4>Product</h4>

          <a href="#features">Features</a>
          <a href="#how-it-works">How It Works</a>
          <a href="#home">Recommendations</a>

        </div>


        {/* Company */}
        <div className="footer-column">

          <h4>Company</h4>

          <a href="#about">About Us</a>
          <a href="#contact">Contact</a>

        </div>


        {/* Social */}
        <div className="footer-column">

          <h4>Follow Us</h4>

          <div className="social-links">
            <a href="#">Instagram</a>
            <a href="#">LinkedIn</a>
            <a href="#">GitHub</a>
          </div>

        </div>

      </div>


      <div className="footer-bottom">

        <p>
          © 2026 MealAtEase. All rights reserved.
        </p>

        <div>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Service</a>
        </div>

      </div>

    </footer>
  );
}

export default Footer;