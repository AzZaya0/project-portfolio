import React, { Component } from "react";
import Css from "./herodown.module.css";
import Logo from "../../assets/svg/IT.svg";
import Logo1 from "../../assets/svg/Rectangle 26.svg";
export class Herodown extends Component {
  render() {
    return (
      <>
        <div className={Css["heroDown"]}>
          <div className={Css["logo1"]}>
            <img src={Logo1} alt="" />
          </div>

          <div className={Css["logo"]}>
            <img src={Logo} alt="" />
          </div>
          <div className={Css["intro"]}>
            <h1>IT BERRIES</h1>
            <p>
              Nulla in velit a metus rhoncus tempus. Nulla congue nulla vel sem
              varius finibus. Sed ornare sit amet lorem sed viverra. In vel urna
              quis libero viverra facilisis ut ac est. Morbi commodo, eros in
              dignissim tempus, lacus odio rutrum augue, in semper sem magna
              quis tellus. Etiam enim erat, suscipit eu semper a, dictum sit
              amet elit. Nunc egestas nisi eget enim gravida facilisis.
              Pellentesque laoreet varius turpis vel pharetra. Ut ante justo,
              consequat vitae elementum tempor, accumsan nec eros.
            </p>
            <a href="#"> READ MORE </a>
          </div>
        </div>
      </>
    );
  }
}

export default Herodown;
