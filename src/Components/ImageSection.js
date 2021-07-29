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
                        
                        <br/>

                        <p>Age</p>
                        <br/>

                        <p>Nationality</p>
                        <br/>

                        <p>Languages</p>
                        <br/>

                        <p>Address</p>

                    </div>
                    <div className="right-section">
                        <p>: Ahammed Zayed Uddin Rahat</p>
                        <br/>

                        <p>: 21</p>
                        <br/>

                        <p>: Bangladeshi</p>
                        <br/>

                        <p>: Bangla , Hindi , English</p>
                        <br/>

                        <p>: Dhaka , Bangladesh</p>
                    


                    </div>
                </div>
                <button className="btn"><a href="https://drive.google.com/file/d/1obk5rxQLDH59ZTnK22taKOzycIrM-W9o/view?usp=sharing">Download Cv</a></button>
            </div>
        </div>
    )
}

export default ImageSection;
