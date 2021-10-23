import React, { useEffect, useState } from 'react';
import Markdown from 'markdown-to-jsx';
// import readMD from '../contents/surah/surah-fatiha.md';

function ContentCard({fileUrl}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    
    fetch(process.env.PUBLIC_URL +`./contents/${fileUrl}`)
    .then(response => (response.text()))
    .then(text => (
      setContent(text)      
    ))
    console.log(content)
    // import(process.env.PUBLIC_URL +`./contents/${fileUrl}`)
    // .then(res => {fetch(res.default)
    //   .then(res => res.text())
    //   .then(res => setContent(res))
    //   .catch(err => console.log(err));
    // })
    // .catch(err => console.log(err));

  })

  return (
    <Markdown className="content">
      {/* {content} */}
      afadf
    </Markdown>
  )
}

export default ContentCard
