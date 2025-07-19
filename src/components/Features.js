// src/components/Features.js
import React from 'react';
import { Row, Col, Card } from 'antd';

const features = [
  { title: "Fast", desc: "Lightning speed performance." },
  { title: "Responsive", desc: "Fits every screen perfectly." },
  { title: "Customizable", desc: "Tailor it your way." }
];

const Features = () => {
  return (
    <div style={{ padding: '50px' }}>
      <Row gutter={16}>
        {features.map((item, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card title={item.title} bordered={false}>
              {item.desc}
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Features;
