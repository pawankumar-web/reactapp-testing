import React from 'react';
import { Carousel, Typography, Button } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import './HeroCarousel.css'; // Custom CSS for animations and overlay

const { Title, Paragraph } = Typography;

const slides = [
  {
    title: "Build Fast with React & Ant Design",
    subtitle: "Launch modern UI in no time with customizable components",
    btnText: "Get Started",
    bgImage: "https://img.freepik.com/free-photo/laptop-with-glowing-screen-table-dark-top-view-copy-space_169016-51607.jpg?w=1480"
  },
  {
    title: "Beautiful UI, Clean Code",
    subtitle: "Focus on features, not frontend complexity",
    btnText: "Explore Templates",
    bgImage: "https://img.freepik.com/free-vector/abstract-colorful-shapes-background_361591-2850.jpg?w=1480"
  },
  {
    title: "Responsive. Elegant. Powerful.",
    subtitle: "Your product deserves a world-class user experience",
    btnText: "See Demo",
    bgImage: "https://img.freepik.com/free-photo/coquettish-lovely-cheerful-pretty-redhead-woman-with-blue-eyes-freckles-wearing-white-large-head_1258-132705.jpg?w=1480"
  }
];

const HeroCarousel = () => (
  <Carousel autoplay autoplaySpeed={3000} effect="fade" dotPosition="bottom">
    {slides.map((slide, index) => (
      <div key={index}>
        <div
          className="carousel-slide"
          style={{
            backgroundImage: `url(${slide.bgImage})`
          }}
        >
          <div className="carousel-overlay">
            <div className="carousel-content">
              <Title className="carousel-title">{slide.title}</Title>
              <Paragraph className="carousel-subtitle">{slide.subtitle}</Paragraph>
              <Button type="primary" size="large" icon={<ArrowRightOutlined />}>
                {slide.btnText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    ))}
  </Carousel>
);

export default HeroCarousel;
