import React from "react"
import "./styles.scss"

export default function AboutMe() {
  return (
    <div className="about-container">
      <p className="heading-1 heading-text about-heading inline-block">
        About Me
      </p>
      <div className="row">
        <div className="about-text col-sm-4 mx-auto text-center">
          I’m a Front-End Developer for <br />
          Coviam Technologies in Bangalore, India.
          <br /> I have a serious passion for UI effects,
          <br /> animations and creating intuitive,
          <br /> dynamic user experiences.
        </div>
      </div>
      <div className="orange-flower-img">
        <img src={"./images/orange-flower.jpg"} alt="flower" />
      </div>
    </div>
  )
}
