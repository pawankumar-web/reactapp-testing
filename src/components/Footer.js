// src/components/Footer.js
import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = () => {
  return (
    <AntFooter style={{ textAlign: 'center' }}>
      © 2025 Made with ❤️ by Pawan
    </AntFooter>
  );
};

export default Footer;
