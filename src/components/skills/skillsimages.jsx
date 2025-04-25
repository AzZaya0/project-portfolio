import React from "react";
import Css from "./skills.module.css";
function skillsimages({ images, skillsname }) {
  return (
    <>
      <div className={Css["skills-images"]}>
        <img src={images} alt="" />

        <p>{skillsname}</p>
      </div>
    </>
  );
}

export default skillsimages;
