import React from "react";
import "./styles.scss";

export default function Work() {
  const project_list = [
    {
      name: "Transport Login",
      desc:
        "A simple login page with a background of the city and moving vehicles in the front created using images and CSS animations to give the effect of a busy day. It contains a form which can be plugged in to websites with minimal changes.",
      img: "./images/transport-login.png",
      link: "https://shalineesingh.github.io/transport-login-page/"
    },
    {
      name: "Translation Extension",
      desc:
        "A Google Chrome extension which is very useful for learning new things without taking out time specifically for the same. It just requires a JSON file in the described format and voila! Everytime a new tab is opened, a new word pops up to be learnt. It also has a search feature.",
      img: "./images/translation-ext.png",
      link: "https://github.com/ShalineeSingh/translation-chrome-extention"
    },
    {
      name: "Automation Dashboard",
      desc:
        "A dashboard that shows the results of automation scripts in web, mobile and APIs. The main dashboard contains the data from the latest release on all the platforms which can be drilled down to get the detailed report of the automation segregated by the suite name.",
      img: "./images/automation-dashboard.png",
      link: "https://github.com/ShalineeSingh/automation-dashboard"
    },
    {
      name: "Image Slideshow Extension",
      desc:
        "This extension is very useful when you want to see all the images from a particular website without the pain of scrolling through the page. This extension gets all the images from the current webpage and creates a slideshow which can be paused and resumed at any moment.",
      img: "./images/slideshow.png",
      link: "https://github.com/ShalineeSingh/img-slideshow-ext"
    },
    {
      name: "Lights Login",
      desc:
        "This page shows the movement of the sun throughout the day and the lights in the city gets switched on/off according to the time of the day. This login page is created keeping in mind the domain of a company which deals with solar panels and lights.",
      img: "./images/lights-login.png",
      link: "https://shalineesingh.github.io/lights-login-page/"
    },
    {
      name: "Moving Clouds",
      desc:
        "Complete HTML, CSS and JS based movement of the clouds which are created using the layering technique in HTML and fractal noise and turbulence. Clouds are created using svgs and the movement is CSS animations.",
      img: "./images/clouds.png",
      link: "https://shalineesingh.github.io/css-clouds/"
    },
    {
      name: "Falling flowers",
      desc:
        "Little pink flowers falling on a clear summer day created using HTML, CSS and JS. Petals of the flowers are created using CSS and the falling movement is randomized using Javascript.",
      img: "./images/cherry-blossoms.png",
      link: "https://shalineesingh.github.io/css-cherry-blossoms/"
    },
    {
      name: "Gesture Detection Extension",
      desc:
        "This Google Chrome extension uses the camera and tracks the gestures of the hand. It can be used to scroll pages with the vertical movement of the hand and go forward/backward in the tab history using the horizontal movements. This is extremely useful while browsing long scrolling websites.",
      img: "./images/gesture-detection.png",
      link: "https://github.com/ShalineeSingh/gesture_detection"
    }
  ];
  return (
    <div className="about-container work-container">
      <div className="lavender-bunch-img"></div>
      <p className="heading-1 heading-text work-heading inline-block">
        My Works
      </p>
      <div className="row">
        <div className="about-text col-sm-4 mx-auto text-center">
          Here are a few projects and their <br />
          GitHub Links. I love creating animations
          <br /> using CSS3 and the extensions were <br />
          built to solve my daily <br />
          life problems.
        </div>
      </div>
      <div className="orange-flower-img">
        <img src={"./images/orange-flower.jpg"} alt="flower" />
      </div>
      <div className="row">
        {project_list.map((project, i) => {
          return (
            <div key={project.name} className="col-md-6 project-container">
              {i % 2 !== 0 && i !== 1 ? (
                <div className="blue-patch d-none d-md-block">
                  <img src={"./images/blue-bg.png"} alt="bg" />
                </div>
              ) : (
                <p></p>
              )}
              <a href={project.link} target="_blank" rel="noreferrer">
                <p className="project-heading">{project.name}</p>
                <img
                  className="project-img"
                  src={project.img}
                  alt={"project" + { i }}
                />
                <p className="project-desc">{project.desc}</p>
              </a>
            </div>
          );
        })}
        <div className="small-flower"></div>
        <div className="bg-right">
          <img src={"./images/bg-2-right.png"} alt="flower" />
        </div>
      </div>
    </div>
  );
}
