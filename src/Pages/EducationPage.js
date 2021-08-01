import React from "react";
import Tittle from "../Components/Tittle";
import allEdus from "../Components/allEdus";

function EducationPage() {
  return (
    <div>
      <div className="b-title">
        <Tittle title={"Education"} />
      </div>
      <div className="BlogsPage">
        {allEdus.map((Edu) => {
          return (
            <div className="blog" key={Edu.id}>
              <div className="blog-content">
                <img src={Edu.image} alt="" />
                <p className="blog-sub">
                  ({Edu.start}--{Edu.end})
                </p>
                <p className="blog-sub">{Edu.sub}</p>
                <hr />
                <a href={Edu.link} className="blog-link">
                  {Edu.title}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default EducationPage;
