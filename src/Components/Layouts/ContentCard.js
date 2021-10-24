import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';

function ContentCard({fileUrl}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`${fileUrl}`)
    .then(res => res.text())
    .then(text => (
      setContent(text)      
    ))
    .catch(err => { 
      err.text()
      .then( errorMessage => {
        setContent(errorMessage)
      }) 
    })
  })

  return (
    <>
      <Markdown className="content" children={content}></Markdown>
    </>
  )
}

export default ContentCard
