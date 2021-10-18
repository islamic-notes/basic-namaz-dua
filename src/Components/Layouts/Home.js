import React from 'react';
import Card from './HomeCard';

const Home = () => {
  return (
    <div className="home__content">
      <div className="container">
        <Card
          id={1}
          title = "সূরা ইয়াসিন"
          content = "বিসমিল্লাহির রাহমানির রাহিম (পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু করছি)।"
        />
        <Card
          id={2}
          title = "সূরা ইখলাস"
          content = "বিসমিল্লাহির রাহমানির রাহিম (পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু করছি)।"
        />
      </div>
    </div>
  )
}

export default Home