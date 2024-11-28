import React from 'react';
import './Header.css'; // Import the CSS file for styling

function Header() {
  return (
    <header className="header">
        <img src="/images/FilmReel.png" alt="Left Film Reel" className="reel left-reel" />
      <div className="header-content">
        <div className="header-logo">
          <img src="/images/imagelogo.png" alt="Your Logo" />
        </div>


        <div className="header-nav">
          <ul>
            <li><a href="#rules">Rules & Guidelines</a></li>
            <li><a href="#submission">Submission</a></li>
            <li><a href="#judging">Judging Panel</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#winners">Winners</a></li>
          </ul>
        </div>
      </div>

      <div className="header-title">
        <h1>Lorem Video Review Contest 2024</h1>
        <p>Share Your Experience, Win $5,000</p>
        <button className="btn">ENTER THE CONTEST</button>
      </div>

      <img src="/images/FilmReel1.png" alt="Right Film Reel" className="right-reel" />
<img src='/images/video.png' alt="Video" className="right-video-reel"/>

    </header>
  );
}

export default Header;