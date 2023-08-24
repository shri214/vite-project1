import React from 'react';
import './style.css';

import { NavLink } from 'react-router-dom'
export const Navbar:React.FC=()=> {

  return (
    <nav>
        <NavLink to={"/"} >First Page</NavLink>
        <NavLink to={'/profile'}>Second Page</NavLink>
    </nav>
  )
}

