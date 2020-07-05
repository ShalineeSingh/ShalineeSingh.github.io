import React from "react";
import "./styles.scss";

export default function Education() {
  return (
    <div className="education-container">
      <div className="row">
        <div className="lavender-bunch-img"></div>
        <p className="heading-1 heading-text inline-block">Education</p>
        <div className="education-text col-sm-9">
          <ul className="flower-list">
            <li>
              <div className="bullet-image"></div>
              <p className="education-li">
                Indian Institute of Information Technology, Vadodara
                <br /> B.Tech in Computer Science and Engineering <br />
                2013-2017
              </p>
            </li>
            <li>
              <div className="bullet-image"></div>
              <p className="education-li">
                St. Karen’s Secondary School
                <br /> Patna
                <br /> High School
                <br /> 2011-2013
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-12 experience-heading">
          <p className="heading-1 heading-text inline-block">Experience</p>
          <div className="lavender-bunch-img"></div>
        </div>
        <div className="education-text experience-text col-sm-9 float-lg-right">
          <div className="blue-patch d-none d-md-block">
            <img src={"./images/blue-bg.png"} alt="bg" />
          </div>
          <ul className="flower-list">
            <li>
              <div className="bullet-image"></div>
              <p className="education-li">
                Coviam Technologies,
                <br /> Banglore
                <br /> Front End Developer
                <br /> May 2017-Present
              </p>
            </li>
            <li>
              <div className="bullet-image"></div>
              <p className="education-li">
                AtoS
                <br /> Mumbai
                <br /> Summer Intern
                <br /> May 2016-July 2016
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-right">
        <img src={"./images/bg-2-right.png"} alt="flower" />
      </div>
    </div>
  );
}
