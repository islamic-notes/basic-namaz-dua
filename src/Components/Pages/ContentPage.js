import React from 'react';
import { useParams } from 'react-router-dom';
import { base64decode } from 'nodejs-base64';
import ContentCard from '../Layouts/ContentCard';

const ContentPage = () => {
  const {path} = useParams();

  return (
    <div className="content-Page">
      <div className="container">
        <p style={{fontWeight: 'bold', paddingTop: '20px'}}>Content Pages Encode : {path}</p>
        <p style={{fontWeight: 'bold'}}>Content Pages Decode : {base64decode(path)}</p>
        <ContentCard url={base64decode(path)}/>
      </div>
    </div>
  )
}

export default ContentPage