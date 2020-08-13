import React from "react";
import aboutMeImage from "../../../static/assets/images/about/headshot.jpg";
export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column special-class"
        style={{
          background: `url(${aboutMeImage}) no-repeat`,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      />
      <div className="right-column">
        I am a hardworker. I will not quit until I understand somethings or until I fix somthing. 
        I am a fast learner and enjoy learning. I know basic HTML, CSS, Javascript, React, SCSS, Python and Django.
        I have a 4.0 GPA, a score of 34 on the ACT, and a 5 on the AP Calculus Test. I am also a kind person who helped others out and who will get the job done.
      </div>
      
     
    </div>); 
}
