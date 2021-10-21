import React from 'react';
import {Card} from 'antd';
import { Link } from 'react-router-dom';

const ArchiveCard = ({path, title}) => {
  // extra={<Link to={`/content/${id}`}>More</Link>}
  return (
    <Link to={`/contents/${path}`}>
      <Card className="archive-card">
        <p>{title}</p>
      </Card>
    </Link>
  )
}

export default ArchiveCard