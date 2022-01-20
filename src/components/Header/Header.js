import React from 'react';
import './Header.css';
import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">
          <img className="logo" src={logo} />
        </NavLink>
        <NavLink to="/resources">Resources</NavLink>
        {currentUser && <NavLink to="/profile">Profile</NavLink>}
        {!currentUser && <NavLink to="/auth">Sign-In</NavLink>}
      </header>
    </div>
  );
}
