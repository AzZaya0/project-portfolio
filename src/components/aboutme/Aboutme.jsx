import React, { Component } from "react";
import Css from "./aboutme.module.css";
import Logo from "../../assets/svg/separator.svg";
import AboutCard from "./component/AboutCard";
export class Aboutme extends Component {
  render() {
    return (
      <>
        <div className={Css["about"]}>
          <div className={Css["about-me"]}>
            <h1>ABOUT ME</h1>

            <p>
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est.
            </p>
            <h2>EXPLORE</h2>
            <img src={Logo} alt="" />
          </div>

          <div className={Css["aboutme-box"]}>
            <AboutCard
              title="DESIGN"
              body=" I can design the site based on your needs and suggestions. I can also
          design the site from scratch and consult you during the job."
            />
            <AboutCard
              title="DEVELOPMENT"
              body="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
            />
          </div>
          <div className={Css["maintainance"]}>
          <AboutCard
            title="MAINTENANCE"
            body="I can design the site based on your needs and suggestions. I can also design the site from scratch and consult you during the job."
          />
          </div>
          <img className={Css["about-bottom-img"]} src={Logo} alt="" />
        </div>
      </>
    );
  }
}

export default Aboutme;
