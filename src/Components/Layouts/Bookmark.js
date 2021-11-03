import React, { useState } from 'react';
import {
  HeartFilled,
  HeartOutlined
} from '@ant-design/icons';

const Bookmark = ({id, path}) => {
  const [bookmark, setBookmark] = useState(false);

  const AddBookmark = () => {
    setBookmark(!bookmark);
    
    if (localStorage.getItem('data') == null) {
      localStorage.setItem('data', '[]')
    }

    let old_data = JSON.parse(localStorage.getItem('data'));
    old_data.push({id, path});

    bookmark ? (
      console.log('remove')
    ):(
      localStorage.setItem("data", JSON.stringify(old_data))
    )
  }

  return (
    <div className="bookmark-btn">
      {bookmark ? (
        <HeartFilled 
          onClick ={()=> AddBookmark()}
        />
      ):(
        <HeartOutlined 
          onClick ={()=> AddBookmark()}
        />
      )}
    </div>
  )
}

export default Bookmark
