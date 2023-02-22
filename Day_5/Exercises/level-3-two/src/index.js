/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profile from './images/profile.svg';
import verified from './images/verfied.png'

const skills = ['HTML', 'CSS', 'Sass', 'Tailwind', 'JS', 'React', 'Node', 'Express', 'Java', 'C', 'C++', 'MongoDB', 'MYSQL', 'Git', 'Linux', 'Bash',]

const skillsFormatted = skills.map(skill => <button key={skill}>{skill}</button>)

// Profile component
const Profile = (props) => {
  return (
    <div className='profile'>
      <img src={props.img}></img>
    </div>
  )
}

// Name component
const Name = (props) => {
  return (
    <div className='name'>
      <p>{props.name}</p>
      <img src={verified} />
    </div>
  )
}

// Bio Component
const Bio = (props) => {
  return (
    <div className='bio'>
      <p>{props.bio}</p>
    </div>
  )
}

// SkillsHeading Component
const SkillsHeading = () => {
  return (
    <div className='skills-heading'>
      <h3>SKILLS</h3>
    </div>
  )
}

// Skills Component
const Skills = (props) => {
  return (
    <div className='skills'>
      {props.skills}
    </div>
  )
}

// Joined Component
const Joined = (props) => {
  return (
    <div className='joined-on'>
        <p>{props.joinedOn}</p>
      </div>
  )
}


const App = () => (
  <div className='main'>
    <div className='card'>
      <Profile img={profile}/>
      <Name name='Mhd_101'/>
      <Bio bio='Junior Developer, India'/>
      <SkillsHeading />
      <Skills skills={skillsFormatted}/>
      <Joined joinedOn='Joined on 20 Feb, 2023'/>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


