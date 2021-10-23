import React from 'react';
import { useParams } from 'react-router-dom';
import { base64decode } from 'nodejs-base64';
import ContentCard from '../Layouts/ContentCard';

const ContentPage = () => {
  const {path} = useParams();

  return (
    <div className="content-Page">
      <div className="container">
        <p>Content Pages Encode : {path}</p>
        <p>Content Pages Decode : {base64decode(path)}</p>
        <ContentCard fileUrl ={base64decode(path)}/>
      </div>
    </div>
  )
}

export default ContentPage