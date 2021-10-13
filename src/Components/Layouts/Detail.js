import React from 'react';
import { Link, useParams } from 'react-router-dom';

const Detail = () => {
  const {id} = useParams();

  return (
    <div className="detail">
      <div className="container">
        <p style={{fontWeight: 'bold'}}>Details Id : {id}</p>
        <p style={{textAlign: 'right', fontSize: '20px'}}>يس</p>
        <p>বাংলা : ইয়া সীন।</p>
        <p style={{textAlign: 'right', fontSize: '20px'}}>وَالْقُرْآنِ الْحَكِيمِ</p>
        <p>বাংলা : শপথ জ্ঞানগর্ভ কুরআনের।</p>
        <Link to='/' style={{paddingTop: '20px'}}>← Go to Home</Link>
      </div>
    </div>
  )
}

export default Detail