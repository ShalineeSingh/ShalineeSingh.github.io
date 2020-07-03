import React from "react"
import "../fonts/fonts.css"
import "../styles/main.scss"
import Homepage from "../components/homepage"
import AboutMe from "../components/aboutme"
import Education from "../components/education"
import Skills from "../components/skills"
import Work from "../components/work"
import Contact from "../components/contact"

export default function Home() {
  return (
    <div>
      <Homepage> </Homepage>
      <AboutMe></AboutMe>
      <Education></Education>
      <Skills></Skills>
      <Work></Work>
      <Contact></Contact>
    </div>
  )
}
