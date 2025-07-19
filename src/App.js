// src/App.js
import React from 'react';
import HeroCarousel from './components/HeroCarousel';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import Features from './components/Features';
import Footer from './components/Footer';
import { Layout } from 'antd';
import 'antd/dist/reset.css';


const { Content } = Layout;

function App() {
  return (
    <Layout>
      <Header />
      <Content>
        <HeroCarousel/>
        <HeroSection />
        <Features />
      </Content>
      <Footer />
    </Layout>
  );
}

export default App;
