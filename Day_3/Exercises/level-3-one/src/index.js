/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profile from './images/profile.svg';
import verified from './images/verfied.png'

const skills = ['HTML', 'CSS', 'Sass', 'Tailwind', 'JS', 'React', 'Node', 'Express', 'Java', 'C', 'C++','MongoDB', 'MYSQL', 'Git', 'Linux', 'Bash',]

const skillsFormatted = skills.map(skill => <button key={skill}>{skill}</button>)


const app = (
  <div className='main'>
    <div className='card'>
        <div className='profile'>
          <img src={profile} />
        </div>
        <div className='name'>
          <p>Mhd_101</p>
          <img src={verified} />
        </div>
        <div className='bio'>
          <p>Junior Developer, India</p>
        </div>
        <div className='skills-heading'>
          <h3>SKILLS</h3>
        </div>
        <div className='skills'>
          {skillsFormatted}
        </div>
        <div className='joined-on'>
          <p>Joined on 20 Feb, 2023</p>
        </div>
    </div>
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(app);


