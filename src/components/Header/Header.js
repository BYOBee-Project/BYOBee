import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/BYOB-logo.png';

export default function Header() {
  return (
    <div className="header">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">
          <img className="logo" src={logo} />
        </NavLink>
        <NavLink to="/resources">Resources</NavLink>
        <NavLink to="/auth">Sign-In</NavLink>
      </header>
    </div>
  );
}
