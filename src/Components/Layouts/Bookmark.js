import React, { useState } from 'react';
import { useStateValue } from '../../stateprovider';
import {
  HeartFilled,
  HeartOutlined
} from '@ant-design/icons';

const Bookmark = ({id, path}) => {
  const [, dispatch] = useStateValue()
  const [bookmark, setBookmark] = useState(false);

  const AddBookmark = () => {
    setBookmark(!bookmark);
    bookmark ? (
      dispatch({
        type: 'REMOVE_BASKET',
        id: id
      })
    ):(
      dispatch({
        type: 'ADD_BOOKMARK',
        basket: [{id, path}]
      })        
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
