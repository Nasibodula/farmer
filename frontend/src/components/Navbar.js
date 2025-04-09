import { NavLink } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { FaBars, FaTimes, FaUser } from 'react-icons/fa';
import './Navbar.css';
import Logo from '../assets/images/Logo.png';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';

function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext();
  const navRef = useRef();
  const headerRef = useRef();
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        headerRef.current.classList.add('scrolled');
      } else {
        headerRef.current.classList.remove('scrolled');
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = () => {
    logout();
  };

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };
  
  const closeNavbar = () => {
    navRef.current.classList.remove('responsive_nav');
  };

  return (
    <header ref={headerRef}>
      <div className="logo-container">
        <img src={Logo} alt="logo" className="logo" />
      </div>
      <nav ref={navRef}>
        <NavLink to="/" exact activeClassName="active" onClick={closeNavbar}>Home</NavLink>
        <NavLink to="/Chat" activeClassName="active" onClick={closeNavbar}>Chat</NavLink>
        <NavLink to="/weathercard" activeClassName="active" onClick={closeNavbar}>Weather</NavLink>
        <NavLink to="/aboutus" activeClassName="active" onClick={closeNavbar}>About</NavLink>
        <NavLink to="/contactus" activeClassName="active" onClick={closeNavbar}>Contact</NavLink>
        
        <div className="auth-section">
          {!user && (
            <NavLink to="/login" className="login-btn" activeClassName="active" onClick={closeNavbar}>
              Login
            </NavLink>
          )}
          {user && (
            <div className="user-info">
              <span className="user-name"><FaUser className="user-icon" /> {user.name}</span>
              <button className="logout-btn" onClick={handleClick}>Log out</button>
            </div>
          )}
        </div>
        
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes />
        </button>
      </nav>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;