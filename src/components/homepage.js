import React from "react";
import "./styles.scss";
import { IconContext } from "react-icons";
import {
  FaInstagram,
  FaLinkedin,
  FaGithubSquare,
  FaTwitterSquare
} from "react-icons/fa";

export default function Homepage() {
  return (
    <div className="homepage-container">
      <div className="bg-left">
        <img src={"./images/bg-2.png"} alt="flower" />
      </div>
      <p className="text-center heading-2 sh-desc">
        FRONT-END DEVELOPER | PAINTER | TRAVELLER
      </p>
      <hr className="desc-hr"></hr>
      <div className="row">
        <p className="col-sm-5 text-center mx-auto heading-4 pt-3">
          Based in Banglore. I like building beautiful websites<br></br>
          and bringing creative designs to life.
        </p>
      </div>
      <div className="small-flower"></div>
      <div className="row mt-5">
        <div className="col-sm-7 profile-text-wrapper">
          <p className="hello-text col-sm-10 pr-3 heading-3">Hello! I'm</p>
          <p className="heading-text heading-1 text-right">Shalinee Singh</p>
        </div>
        <div className="profile-img-wrapper col-sm-5">
          <div className="profile-img float-lg-right">
            <img src={"./images/shalinee.jpg"} alt="shalinee singh" />
          </div>
          <div className="lavender-img">
            <img src={"./images/lavender.png"} alt="flower" />
          </div>
        </div>
      </div>
      {/* <img src={'./images/shalinee.jpg'} alt="shalinee singh" className="profile-img"/> */}
      {/*  */}
      <div className="social-icons-wrapper">
        <ul className="list-group">
          <li className="list-group-item">
            <a
              href="https://www.instagram.com/shalinee.singh/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "social-icon" }}>
                <FaInstagram />
              </IconContext.Provider>
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://www.linkedin.com/in/shalinee-singh/"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "social-icon" }}>
                <FaLinkedin />
              </IconContext.Provider>
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://github.com/ShalineeSingh"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "social-icon" }}>
                <FaGithubSquare />
              </IconContext.Provider>
            </a>
          </li>
          <li className="list-group-item">
            <a
              href="https://twitter.com/shalinee43"
              target="_blank"
              rel="noreferrer"
            >
              <IconContext.Provider value={{ className: "social-icon" }}>
                <FaTwitterSquare />
              </IconContext.Provider>
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-right">
        <img src={"./images/bg-2-right.png"} alt="flower" />
      </div>
    </div>
  );
}
