import React from 'react'

const HomePage = () => {
  return (
    <div className="home-page">
      <video autoPlay loop muted playsInline className="video-background">
        <source src="videos/10.mp4" type="video/mp4" />
      </video>
      <div className="text-overlay">
        <h1>Welcome to Version Infinity</h1>
      </div>
    </div>
  );
};

export default HomePage;
