import React from "react";
import about from "../img/about.jpg";

function ImageSection() {
  return (
    <div className="ImageSection">
      <div className="img">
        <img src={about} alt="" />
      </div>
      <div className="about-info">
        <div className="about-details">
          <div className="left-section">
            <p>Full Name</p>

            <br />

            <p>Age</p>
            <br />

            <p>Nationality</p>
            <br />

            <p>Languages</p>
            <br />

            <p>Address</p>
          </div>
          <div className="right-section">
            <p>: Ahammed Zayed Uddin Rahat</p>
            <br />

            <p>: 23</p>
            <br />

            <p>: Bangladeshi</p>
            <br />

            <p>: Bangla , Hindi , English</p>
            <br />

            <p>: Chittagong , Bangladesh</p>
          </div>
        </div>
        <button className="btn">
          <a href="https://drive.google.com/file/d/1E4udIOrG6Aw-t_-qQ1y1WRr5dxgnUFDo/view?usp=sharing">
            Download Cv
          </a>
        </button>
      </div>
    </div>
  );
}

export default ImageSection;
