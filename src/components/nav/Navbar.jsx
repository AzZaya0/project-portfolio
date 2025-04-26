import React, { Component } from "react";
import Css from "./navbar.module.css";
import Logo from "../../assets/svg/Group.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false,
      hellp: "sayal",
    };
  }

  toggleNav = () => {
    this.setState((prev) => {
      console.log(this.state.toggle);
      return !prev;
    });
  };

  render() {
    return (
      <>
        <div className={this.state.toggle ? Css["slider"] : Css["none"]}>
          <h1>nav</h1>
        </div>

        <div className={Css["navBar"]}>
          <a href="">
            <img src={Logo} alt="" />
          </a>

          <div
            className={Css["mobile-nav"]}
            onClick={this.toggleNav} // ✅ Correct way, no arrow function
          >
            <FontAwesomeIcon icon={faBars} size="2x" />
          </div>

          <div className={Css["nav"]}>
            <a href="">About Me </a>
            <a href="">Skills </a>
            <a href="">Portfolio </a>
            <a href="" className={Css["btn-contact"]}>
              Contact Me
            </a>
          </div>
        </div>
      </>
    );
  }
}

export default Navbar;
