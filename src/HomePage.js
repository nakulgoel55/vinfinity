import React from 'react'

const HomePage = () => {
  return (
    <div className="home-page">
      <video className='video-background'
            src="videos/10.mp4"
            controls
            muted
            autoPlay={"autoplay"}
            preLoad="auto"
            loop 
 > </video>


      <div className="text-overlay">
        <h1>Welcome to Version Infinity</h1>
      </div>
    </div>
  );
};

export default HomePage;
