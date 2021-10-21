import React from 'react';
import { Col, Row } from 'antd';
import ArchiveCard from '../Layouts/ArchiveCard';
import { base64encode } from 'nodejs-base64';

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="container">
      <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={base64encode('dua/test-content.md')}
            title = "সূরা ইয়াসিন"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={base64encode('dua/test-content.md')}
            title = "সূরা ইখলাস"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={base64encode('dua/test-content.md')}
            title = "সূরা ইয়াসিন"
          />
        </Col>
        <Col className="gutter-row" span={6}>
          <ArchiveCard
            path={base64encode('dua/test-content.md')}
            title = "সূরা ইখলাস"
          />
        </Col>
      </Row>
      </div>
    </section>
  )
}

export default HomePage