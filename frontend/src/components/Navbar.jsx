import { Link } from "react-router-dom";
function Navbar() {
    return (
        <nav className='navbar'>
            <div className='logo'>
                <span id='logo-circle'>🥗</span>
                <span> MealAtEase</span>
            </div>
            <div className='nav-links'>
                <a href='#'>Home</a>
                <a href='#features'>Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href='#about'>About</a>
            </div>
            <div className='nav-actions'>
                <button className='login-btn'>
                    LogIn
                </button>
                <Link to="/auth" className="primary-btn">
  Get Started
</Link>
            </div>
        </nav>
    );
}
export default Navbar;