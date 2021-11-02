import React from 'react';
import { List } from 'antd';
import ArchiveCard from '../Layouts/ArchiveCard';
import { base64encode } from 'nodejs-base64';
import { useStateValue } from '../../stateprovider';

const HomePage = () => {
  const [{basket}] = useStateValue();

  const data = [
    {
      path: base64encode('dua/test-content.md'),
      title: "সূরা ইয়াসিন"
    },
    {
      path: base64encode('dua/test-content.md'),
      title: "সূরা ইখলাস"
    },
    {
      path: base64encode('dua/test-content.md'),
      title: "সূরা ইয়াসিন"
    },
    {
      path: base64encode('dua/test-content.md'),
      title: "সূরা ইখলাস"
    }
  ];
  
  return (
    <section className="home-page">
      <div className="container">
        {basket !== null ? (
          <List
            size="large"
            header={<div>List of Bookmark</div>}
            bordered
            style={{marginBottom: '20px'}}
            dataSource={basket}
            renderItem={item => <List.Item>{item.path}</List.Item>}
          />
        ):(
          <List
            size="large"
            header={<div>List of Bookmark</div>}
            bordered
            style={{marginBottom: '20px'}}
          />
        )}
        <List
          grid={{ 
            gutter: 12,
            xs: 1,
            sm: 2,
            md: 3,
            lg: 4,
            xl: 4,
            xxl: 4
          }}
          dataSource={data}
          renderItem={item => (
            <List.Item>
              <ArchiveCard
                path={item.path}
                title = {item.title}
              />
            </List.Item>
          )}
        />
      </div>
    </section>
  )
}

export default HomePage