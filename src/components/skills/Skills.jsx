import React, { Component } from "react";
import Css from "./skills.module.css";
import Skillsimages from "./skillsimages";
import HtmlImage from "../../assets/svg/html.svg";
import CssImage from "../../assets/svg/css.svg";
import sass from "../../assets/svg/sass.svg";
import Java from "../../assets/svg/JAVA.svg";
import My from "../../assets/svg/react img.svg";
import Bootstrap from "../../assets/svg/Bootstrap.svg";
import Git from "../../assets/svg/git.svg";
import Figma from "../../assets/images/figma.png";
export class Skills extends Component {
  render() {
    return (
      <>
      <div className={Css["skills-section"]}>
      <div className={Css["skills"]}>
          <h1>Skills</h1>
          <div>
            <h2>Using Now:</h2>
          </div>
        </div>
        <div className={Css["block1"]}>
          <div className={Css["block"]}>
            <Skillsimages skillsname="HTML 5" images={HtmlImage} />
            <Skillsimages skillsname="CSS 3" images={CssImage} />
            <Skillsimages skillsname="SASS" images={sass} />
            <Skillsimages skillsname="JAVASCRIPT" images={Java} />
            <Skillsimages skillsname="REACT" images={My} />
            <Skillsimages skillsname=" BOOTSTRAP" images={Bootstrap} />
            <Skillsimages skillsname="GIT" images={Git} />
            <Skillsimages skillsname="FIGMA" images={Figma} />
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Skills;
