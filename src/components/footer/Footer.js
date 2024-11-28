import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="testimonials">

        <h2>Testimonials</h2>
        <div className="testimonial-list">
          <div className="testimonial">
            <img src="/images/Ellipse10.jpg" alt="James Thompson" />
            <p>James Thompson</p>
            <p>Austin, TX</p>
            <p>"Winning this video contest has been an incredible experience! I never imagined that my video would resonate with so many people. The competition was tough, with so many talented creators submitting amazing work, but I'm thrilled to have been recognized. Thank you to everyone who voted and supported me throughout this journey!"</p>
          </div>
          <div className="testimonial">
            <img src="/images/Ellipse9.jpg" alt="Emily Rivera" />
            <p>Emily Rivera</p>
            <p>Los Angeles, CA</p>
            <p>"I'm beyond excited to have won this contest! It was such a fun project to work on, and I'm so grateful for the opportunity to share my passion with a wider audience. Winning has given me a huge confidence boost and the motivation to keep pursuing my dreams in video production. A big thank you to the organizers and everyone who believed in me!"</p>
          </div>
          <div className="testimonial">
            <img src="/images/Ellipse8.jpg" alt="Sarah Mitchell" />
            <p>Sarah Mitchell</p>
            <p>Chicago, IL</p>
            <p>"Participating in this contest was an amazing challenge, and winning feels surreal. I put a lot of effort into creating something unique and meaningful, and to have that effort recognized is truly rewarding. This victory has opened up new doors for me, and I'm excited to see where this journey takes me next. Thanks to all who made ..."</p>
          </div>


        </div>
        <div >
          <p>Share your post on social media using:</p>
          <h1>#LoremVideo</h1>

          <div className="footer-content">
          <div className="footer-links">
            <a href="#">©copyright all rights reserved</a>
            <a href="#">Term & conditions</a>
            <a href="#">Judging Panel</a>
          </div>
          </div>
          
        </div>
      

      </div>
    </footer>
  );
}

export default Footer;