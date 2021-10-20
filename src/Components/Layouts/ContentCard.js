import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const ContentCard = ({id, title, content}) => {
  return (
    <>
      <Card title={title} extra={<Link to={`/content/${id}`}>More</Link>} style={{ width: 900, marginBottom: '20px' }}>
        <p>{content}</p>
      </Card>
    </>
  )
}

export default ContentCard