// src/components/HeroSection.js
import React from 'react';
import { Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const HeroSection = () => {
  return (
    <div style={{ padding: '80px', textAlign: 'center', background: '#f0f2f5' }}>
      <Title>Welcome to Our Product</Title>
      <Paragraph>Your journey to modern UI starts here.</Paragraph>
      <Button type="primary" size="large">Get Started</Button>
    </div>
  );
};

export default HeroSection;
