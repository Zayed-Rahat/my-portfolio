import React from 'react';
import about from '../img/about.jpg';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="img">
                <img src={about} alt="" />
            </div>
            <div className="about-info">
                <h4>Hey, My name is<span> RAHAT</span></h4>
                <p className="about-text">
                    I'm a web developer since 2020, I started to develop Web Applications for one of my universities Club's Webpage.
                    Starting from smaller projects, I ended up developing a fully functional Web Based Solution.I use my skils with pure dedication and deliver work on time.

                </p>
                <div className="about-details">
                    <div className="left-section">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality</p>
                        <p>Languages</p>
                        <p>Address</p>

                    </div>
                    <div className="right-section">
                        <p>: Ahammed Zayed Uddin Rahat</p>
                        <p>: 22</p>
                        <p>: Bangladeshi</p>
                        <p>: Bangla , Hindi , English</p>
                        <p>: Dhaka , Bangladesh</p>

                    </div>
                </div>
                <button className="btn">Download Cv</button>
            </div>
        </div>
    )
}

export default ImageSection;
