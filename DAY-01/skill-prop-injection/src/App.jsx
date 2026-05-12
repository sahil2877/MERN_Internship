import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import SkillList from "./SkillList";

function App() {

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 80 },
    { name: "Python", level: 60 },
    { name: "HTML", level: 96 },
    { name: "CSS", level: 95 },
    { name: "Node JS", level: 70 },
    {name: "JAVA", level: 50 }
  ];

  return (
    <div>

      <h1>My Skills</h1>

      <SkillList skills={skills} />

    </div>
  );
}

export default App;