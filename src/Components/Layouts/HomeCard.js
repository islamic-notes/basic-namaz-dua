import React from 'react';
import { Card } from 'antd';
import { Link } from 'react-router-dom';

const HomeCard = ({id, title, content}) => {
  return (
    <>
      <Card title={title} extra={<Link to={`/detail/${id}`}>More</Link>} style={{ width: 900, marginBottom: '20px' }}>
        <p>{content}</p>
      </Card>
    </>
  )
}

export default HomeCard