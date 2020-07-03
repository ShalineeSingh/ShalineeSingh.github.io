import React from "react"
import "./styles.scss"

export default function Skills() {
  const skill_list = [
    {
      name: "SCSS",
      value: 90,
    },
    {
      name: "Javascript",
      value: 80,
    },
    {
      name: "Socket.IO",
      value: 80,
    },
    {
      name: "HTML",
      value: 75,
    },

    {
      name: "Node Js",
      value: 70,
    },
    {
      name: "Angular Js",
      value: 65,
    },
    {
      name: "Angular 7",
      value: 60,
    },
    {
      name: "Adobe XD",
      value: 50,
    },
    {
      name: "React",
      value: 25,
    },
  ]
  return (
    <div className="skills-container">
      <div className="lavender-bunch-img"></div>
      <p className="heading-1 heading-text inline-block">Skills</p>
      <p className="heading-1 web-designer-text inline-block">WEB DESIGNER</p>
      <div className="row">
        <div className="col-md-9">
          <ul className="flower-list">
            {skill_list.map((skill, i) => {
              return (
                <li className="row">
                  <div className="bullet-image"></div>
                  <div className="skill-li col-sm-11 px-0">
                    <div className="col-sm-4 heading-2">
                      <span>{skill.name}</span>
                    </div>
                    <div className="col-sm-6">
                      <div className="progress-bar-wrapper">
                        <div
                          className="progress-bar"
                          value="70"
                          style={{ width: skill.value + "%" }}
                        ></div>
                      </div>
                    </div>
                    <div className="col-sm-2 heading-2">
                      <span>{skill.value}%</span>
                    </div>
                  </div>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}
