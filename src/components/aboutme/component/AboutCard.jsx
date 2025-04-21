import React from "react";
import Css from "../aboutme.module.css";
function AboutCard({title,body}) {
  return (
    <>
      <div className={Css["about-card"]}>
        <h1>{title}</h1>
        <p>
         {body}
        </p>
      </div>
    </>
  );
}
export  default AboutCard;
