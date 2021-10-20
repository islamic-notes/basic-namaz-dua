import React from 'react';
import ContentCard from '../Layouts/ContentCard';

const HomePage = () => {
  return (
    <section className="home-page">
      <div className="container">
        <ContentCard
          id={1}
          title = "সূরা ইয়াসিন"
          content = "বিসমিল্লাহির রাহমানির রাহিম (পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু করছি)।"
        />
        <ContentCard
          id={2}
          title = "সূরা ইখলাস"
          content = "বিসমিল্লাহির রাহমানির রাহিম (পরম করুণাময়, অসীম দয়ালু আল্লাহর নামে শুরু করছি)।"
        />
      </div>
    </section>
  )
}

export default HomePage