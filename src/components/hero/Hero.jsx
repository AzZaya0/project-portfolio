import React, { Component } from "react";
import Css from "./hero.module.css";
import model from "../../assets/images/image 17.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';


export class Hero extends Component {
  render() {
    return (
      <>
        <div className={Css['right-bg']}>
          <img src={model} alt="" />
        </div>
        <div className={Css.hero}>
          <div className={Css['hero-intro']}>
            <span>Hi! I am </span>
            <h1>Tomasz Gajda </h1>
            <h3>Front-end/UI Designer</h3>
           <a href=""><div><FontAwesomeIcon icon={faFacebook} size="1x" /></div></a> 
            <a href=""><div><FontAwesomeIcon icon={faGithub} size="1x" /></div></a>
            <a href=""><div><FontAwesomeIcon icon={faLinkedin} size="1x" /></div></a>
          
          </div>
        </div>
      </>
    );
  }
}

export default Hero;
