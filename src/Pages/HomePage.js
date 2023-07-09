import React from "react";
import {
  faGithubSquare,
  faFacebookSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function HomePage() {
  return (
    <div className="HomePage">
      <header className="hero">
        <h1 className="hero-text">
          Hi, I am
          <span> RAHAT.</span>
        </h1>
        <p className="h-sub-text">
          I'm a web developer since 2020, I started to develop Web Applications
          for one of my universities Club's Webpage. Starting from smaller
          projects, I ended up developing a fully functional Web Based
          Solution.I use my skills with pure dedication and deliver work on
          time. Currently I'm learning blockchain.
        </p>
        <div className="icons">
          <a href="https://github.com/Zayed-Rahat" className="icon-holder">
            <FontAwesomeIcon icon={faGithubSquare} className="icon gh" />
          </a>
          <a href="https://www.facebook.com/rahat.9215" className="icon-holder">
            <FontAwesomeIcon icon={faFacebookSquare} className="icon fb" />
          </a>
          <a
            href="https://bd.linkedin.com/in/ahammed-zayed-uddin-rahat-b254741b0"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faLinkedin} className="icon fb" />
          </a>
          <a
            href="https://www.instagram.com/zayed_rahat/?hl=en"
            className="icon-holder"
          >
            <FontAwesomeIcon icon={faInstagramSquare} className="icon gh" />
          </a>
        </div>
      </header>
    </div>
  );
}

export default HomePage;
