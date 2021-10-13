import React from 'react';
import { useParams } from 'react-router';

const MenuPage = () => {
  const {pageId} = useParams();

  return (
    <div className="menuPage">
      <div className="container">
        <p style={{fontWeight: 'bold'}}>Page Id : {pageId}</p>
      </div>
    </div>
  )
}

export default MenuPage