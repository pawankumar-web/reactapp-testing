// src/components/Header.js
import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-scroll';
import './Header.css';

const Header = () => {
  return (
    <header className="custom-header">
      <div className="logo">🚀 DevLaunch</div>
      <Menu mode="horizontal" theme="dark" className="custom-menu">
        <Menu.Item key="home">
          <Link to="home" smooth={true} duration={500}>Home</Link>
        </Menu.Item>
        <Menu.Item key="features">
          <Link to="features" smooth={true} duration={500}>Features</Link>
        </Menu.Item>
        <Menu.Item key="contact">
          <Link to="contact" smooth={true} duration={500}>Contact</Link>
        </Menu.Item>
      </Menu>
    </header>
  );
};

export default Header;
