import React from 'react';
import { Col, Row } from 'antd';
import ArchiveCard from '../Layouts/ArchiveCard';

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="container">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={1}
            title = "সূরা ইয়াসিন"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={2}
            title = "সূরা ইখলাস"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={1}
            title = "সূরা ইয়াসিন"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={2}
            title = "সূরা ইখলাস"
          />
        </Col>
      </Row>
      </div>
    </section>
  )
}

export default HomePage