import Css from "./navbar.module.css";
import Logo from "../../assets/svg/Group.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
function Navbar2() {
  let [toggle, setToggle] = useState(false);

  const toggleNav = () => {
    setToggle((prev) => {
      console.log(toggle);
      return !prev;
    });
  };

  return (
    <>
      <div className={toggle ? Css["slider"] : Css["none"]}>
        <div className={Css["btnNav"]}>
          <div
            className={Css["mobile-nav"]}
            onClick={() => {
              toggleNav();
            }}
          >
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </div>
        </div>
        <div className={Css["navContaints"]}>
          <button>About Me</button>
          <button>Skills</button>
          <button>Portfolio</button>
          <button>Contact Me</button>
        </div>
      </div>

      <div className={Css["navBar"]}>
        <a href="">
          <img src={Logo} alt="" />
        </a>

        <div
          className={toggle ? Css["none"] : Css["mobile-nav"]}
          onClick={() => {
            toggleNav();
          }}
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

export default Navbar2;
