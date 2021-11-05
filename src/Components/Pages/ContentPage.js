import React from 'react';
import { Row, Col } from 'antd';
import { useParams } from 'react-router-dom';
import { base64decode } from 'nodejs-base64';
import ContentCard from '../Layouts/ContentCard';
import Bookmark from '../Layouts/Bookmark';

const ContentPage = () => {
  const {path} = useParams();

  return (
    <div className="content-Page">
      <div className="container">
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
          <Col className="gutter-row" span={12}>
            <div className="page-url">
              <p>Content Pages Encode : {path}</p>
              <p>Content Pages Decode : {base64decode(path)}</p>
            </div>
          </Col>
          <Col className="gutter-row" span={12}>
            <Bookmark id={base64decode(path)} path={path}/>
          </Col>
        </Row>
        <ContentCard fileUrl ={base64decode(path)}/>
      </div>
    </div>
  )
}

export default ContentPage