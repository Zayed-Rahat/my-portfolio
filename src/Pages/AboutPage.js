import React from "react";
import Tittle from "../Components/Tittle";
import ImageSection from "../Components/ImageSection";
import SkillsSection from "../Components/SkillsSection";
/* import ServicesSection from '../Components/ServicesSection';
import design from '../img/design.svg';
import intelligence from '../img/intelligence.svg';
import gamedev from '../img/game-dev.svg'; */

function AboutPage() {
  return (
    <div className="AboutPage">
      <Tittle title={"About Me"} />
      <ImageSection />
      <Tittle title={"My Skills"} />
      <div className="skillsContainer">
        <SkillsSection skill={"Html & CSS"} progress={"90%"} width={"90%"} />
        <SkillsSection skill={"Javascript"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"ES6"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"React Js"} progress={"85%"} width={"85%"} />
        <SkillsSection skill={"Next Js"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"C & C++"} progress={"80%"} width={"80%"} />
        <SkillsSection skill={"Node Js"} progress={"75%"} width={"75%"} />
        <SkillsSection
          skill={"SCSS & Tailwind CSS"}
          progress={"70%"}
          width={"70%"}
        />
        <SkillsSection skill={"Python"} progress={"60%"} width={"60%"} />
        <SkillsSection skill={"Java"} progress={"60%"} width={"60%"} />
        <SkillsSection
          skill={"Material UI & Ant Design"}
          progress={"65%"}
          width={"65%"}
        />
      </div>

      {/*   <Tittle title={'Services'} span={'Services'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Web design'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={intelligence} title={'Artificial Intelligence'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />
                <ServicesSection image={gamedev} title={'Game Development'}
                    text={'Lorem ipsum dolor sit amet consectetur adipisicing elit.'}
                />


            </div> */}
    </div>
  );
}

export default AboutPage;
