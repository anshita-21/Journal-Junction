// import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import {logout} from './redux/user/slice.js'
// import { useDispatch } from 'react-redux';
// // import DarkMode from './components/DarkMode/DarkMode';
// // import './components/DarkMode/DarkMode.css';


// function Header(props) {
//   const { currentUser } = useSelector((state) => state.user);
//   const dispatch = useDispatch();

//   async function handleLogout(e) {
//     e.preventDefault();
//     try {
//       const res = await fetch('/api/user/logout');
//       const data = await res.json();
      
//        dispatch(logout());
//     } catch (error) {
//       console.log(error);
//     }
    
//   }

//     return (
//     <header className="flex justify-between items-center">
//       <Link className ="font-bold text-2xl" to={'/'}>MY BLOG</Link>
//       <nav className="flex">
      
  
//       {!currentUser? (
//         <div className='flex gap-4'>
//         <Link className='text-gray-500 hover:underline hover:font-semibold' to={'/login'}>Login</Link>
//         <Link className='text-gray-500 hover:underline hover:font-semibold' to={'/register'} >Register</Link>
//         </div>
//       ) :
//       <div className='flex gap-4'>
//       <Link className='text-gray-500 hover:underline hover:font-semibold' to={'/create'}>Create a new post</Link>
//       <span className='text-gray-500 hover:underline cursor-pointer hover:font-semibold' onClick={handleLogout}>Logout</span>
//       </div>
//       }
        

//       </nav>
//     </header>
//     );
// }

// export default Header;

// src/Header.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useSelector, useDispatch } from 'react-redux';
// import { logout } from './redux/user/slice';
// import { useTheme } from './ThemeContext';

// function Header(props) {
//   const { currentUser } = useSelector((state) => state.user);
//   const dispatch = useDispatch();
//   const { theme, toggleTheme } = useTheme();

//   async function handleLogout(e) {
//     e.preventDefault();
//     try {
//       await fetch('/api/user/logout');
//       dispatch(logout());
//     } catch (error) {
//       console.log(error);
//     }
//   }

//   return (
//     <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
//       <Link className="font-bold text-2xl" to={'/'}>
//         MY BLOG
//       </Link>
//       <nav className="flex items-center gap-4">
//         {!currentUser ? (
//           <div className="flex gap-4">
//             <Link className="hover:underline hover:font-semibold" to={'/login'}>
//               Login
//             </Link>
//             <Link className="hover:underline hover:font-semibold" to={'/register'}>
//               Register
//             </Link>
//           </div>
//         ) : (
//           <div className="flex gap-4">
//             <Link className="hover:underline hover:font-semibold" to={'/create'}>
//               Create a new post
//             </Link>
//             <span className="hover:underline cursor-pointer hover:font-semibold" onClick={handleLogout}>
//               Logout
//             </span>
//           </div>
//         )}
//         <button onClick={toggleTheme} className="hover:underline hover:font-semibold">
//           {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
//         </button>
//       </nav>
//     </header>
//   );
// }

// export default Header;

import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from './redux/user/slice';
import { useTheme } from './ThemeContext';
import ToggleSwitch from './components/ToggleSwitch';

function Header(props) {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const { theme, toggleTheme } = useTheme();

  async function handleLogout(e) {
    e.preventDefault();
    try {
      await fetch('/api/user/logout');
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className={`flex justify-between items-center p-4 ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
      <Link className="font-bold text-2xl" to={'/'}>
        MY BLOG
      </Link>
      <nav className="flex items-center gap-4">
        {!currentUser ? (
          <div className="flex gap-4">
            <Link className="hover:underline hover:font-semibold" to={'/login'}>
              Login
            </Link>
            <Link className="hover:underline hover:font-semibold" to={'/register'}>
              Register
            </Link>
          </div>
        ) : (
          <div className="flex gap-4">
            <Link className="hover:underline hover:font-semibold" to={'/create'}>
              Create a new post
            </Link>
            <span className="hover:underline cursor-pointer hover:font-semibold" onClick={handleLogout}>
              Logout
            </span>
          </div>
        )}
        <ToggleSwitch isOn={theme === 'dark'} handleToggle={toggleTheme} />
      </nav>
    </header>
  );
}

export default Header;
