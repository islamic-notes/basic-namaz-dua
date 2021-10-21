import React, { useEffect, useState } from 'react';

function ContentCard({url}) {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(`./contents/${url}`)
    .then(response => {
      return response.text();
    })
    .then(text => {
      setContent(text);
    })
  })

  return (
    <div className="content-card">
      {content}
    </div>
  )
}

export default ContentCard
