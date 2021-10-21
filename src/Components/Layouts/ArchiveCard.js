import React from 'react';
import {Card} from 'antd';
// import { Link } from 'react-router-dom';

const ArchiveCard = ({path, title}) => {
  // extra={<Link to={`/content/${id}`}>More</Link>}
  return (
    <div className="archive-card">
      <Card>
        <p>{title}</p>
      </Card>
    </div>
  )
}

export default ArchiveCard