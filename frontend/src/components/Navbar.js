// import { NavLink } from 'react-router-dom';
// import { useRef } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa';
// import './Navbar.css';
// import Logo from '../assets/images/Logo.png';
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'

// function Navbar() {
//   const { logout } = useLogout()
//   const { user } = useAuthContext()
//   const navRef = useRef();

//   const handleClick = () => {
//          logout()
//        }

//   const showNavbar = () => {
//     navRef.current.classList.toggle('responsive_nav');
//   };

//   return (
//     <header>
//       <img src={Logo} alt="logo image" />
//       <nav ref={navRef}>
//         <NavLink to="/" exact activeClassName="active">Home</NavLink>
//         <NavLink to="/Chat" activeClassName="active">Chat</NavLink>
//         <NavLink to="/weathercard" activeClassName="active">Weather Forecast</NavLink>
//         <NavLink to="/Contact" activeClassName="active">Contact</NavLink>
//         {!user && (
//         <div>
//         <NavLink to="/login" exact activeClassName="active">Login</NavLink>
//         {/* <NavLink to="/login" exact activeClassName="active">Signup</NavLink> */}
//         </div>
//         )}
//         <button className="nav-btn nav-close-btn" onClick={showNavbar}>
//           <FaTimes />
//         </button>
//       </nav>
//       {user && (
//             <div>
//               <span>{user.name}</span>
//               <button onClick={handleClick}>Log out</button>
//             </div>
//           )}
//       <button className="nav-btn" onClick={showNavbar}>
//         <FaBars />
//       </button>
//     </header>
//   );
// }
// export default Navbar

// import { Link } from 'react-router-dom'
// import { useLogout } from '../hooks/useLogout'
// import { useAuthContext } from '../hooks/useAuthContext'

// const Navbar = () => {
//   const { logout } = useLogout()
//   const { user } = useAuthContext()

//   const handleClick = () => {
//     logout()
//   }

//   return (
//     <header>
//       <div className="container">
//         <nav>
//           {user && (
//             <div>
//               <span>{user.email}</span>
//               <button onClick={handleClick}>Log out</button>
//             </div>
//           )}
//           {!user && (
//             <div>
//               <Link to="/login">Login</Link>
//               <Link to="/signup">Signup</Link>
//             </div>
//           )}
//         </nav>
//       </div>
//     </header>
//   )
// }

// export default Navbar

import { NavLink } from 'react-router-dom';
import { useRef } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import './Navbar.css';
import Logo from '../assets/images/Logo.png';
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {
  const { logout } = useLogout()
  const { user } = useAuthContext()
  const navRef = useRef();

  const handleClick = () => {
    logout();
  }

  const showNavbar = () => {
    navRef.current.classList.toggle('responsive_nav');
  };

  return (
    <header>
      <img src={Logo} alt="logo image" />
      <nav ref={navRef}>
        <NavLink to="/" exact activeClassName="active">Home</NavLink>
        <NavLink to="/Chat" activeClassName="active">Chat</NavLink>
        <NavLink to="/weathercard" activeClassName="active">Weather Forecast</NavLink>
        <NavLink to="/contact" activeClassName="active">Contact</NavLink>
        {!user && (
          <NavLink to="/login" exact activeClassName="active">Login</NavLink>
        )}
        {user && (
          <>
            <span>{user.name}</span>
            <button onClick={handleClick}>Log out</button>
          </>
        )}
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