import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { base64decode } from 'nodejs-base64';

const ContentPage = () => {
  const {path} = useParams();

  return (
    <div className="content-Page">
      <div className="container">
        <p style={{fontWeight: 'bold', paddingTop: '20px'}}>Content Pages Encode : {path}</p>
        <p style={{fontWeight: 'bold'}}>Content Pages Decode : {base64decode(path)}</p>
        <p style={{textAlign: 'right', fontSize: '20px'}}>يس</p>
        <p>বাংলা : ইয়া সীন।</p>
        <p style={{textAlign: 'right', fontSize: '20px'}}>وَالْقُرْآنِ الْحَكِيمِ</p>
        <p>বাংলা : শপথ জ্ঞানগর্ভ কুরআনের।</p>
        <Link to='/' style={{paddingTop: '20px'}}>← Go to Home</Link>
      </div>
    </div>
  )
}

export default ContentPage