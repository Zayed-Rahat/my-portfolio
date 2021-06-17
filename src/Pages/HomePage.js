import React from 'react';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am
                    <span> RAHAT.</span>
                </h1>
                <p className="h-sub-text">
                    I'm a web developer since 2020, I started to develop Web Applications for one of my universities Club's Webpage.
                    Starting from smaller projects, I ended up developing a fully functional Web Based Solution.I use my skils with pure dedication and deliver work on time.
                </p>
                <div className="icons">
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faFacebook} className="icon fb" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </Link>
                    <Link to="test" className="icon-holder">
                        <FontAwesomeIcon icon={faYoutube} className="icon yt" />
                    </Link>
                </div>
            </header>
        </div>
    )
}

export default HomePage;
