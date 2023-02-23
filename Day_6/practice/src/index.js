import React from 'react';
import ReactDOM from 'react-dom/client';

// Mapping Array of Numbers

// const Number = (props) => {
//   const arr = props.number.map((element) => <li>{element}</li>)
//   return arr
// }

// const App = () => {
//   const arr = [1,2,3,4,5]
//   return (
//     <div>
//       <p>Numbers List</p>
//       <ul>
//         <Number number={arr} />
//       </ul>
//     </div>
//   )
// }

// Mapping Arrays of Arrays

// const skills = [
//   ['HTML', 10],
//   ['CSS', 7],
//   ['JavaScript', 9],
//   ['React', 8],
// ]


// const Skill = ({skill: [tech, level]}) => {
//   return (<li>
//     {tech} {level}
//   </li>)
// }

// const Skills = (props) => {
//   const skillsList = props.skill.map(skill => <Skill skill={skill} />)
//   return <ul>{skillsList}</ul>
// }

// const App = () => {
//   return (
//     <div>
//       <h1>Skills level</h1>
//       <Skills skill={skills} />
//     </div>
//   )
// }


// Mapping Array of Objects

const countries = [
  { name: 'Finland', city: 'Helsinki' },
  { name: 'Sweden', city: 'Stockholm' },
  { name: 'Denmark', city: 'Copenhagen' },
  { name: 'Norway', city: 'Oslo' },
  { name: 'Iceland', city: 'Reykjavík' },
]

const Country = ({country: {name, city}}) => {
  return (
    <li>
      {name} {city}
    </li>
  )
}

const Countries = (props) => {
  const countriesList = props.countries.map(country => <Country country={country} />)
  return <ul>{countriesList}</ul>
}

const App = () => {
  return (
    <div>
      <p>Countries With Cities Name</p>
      <Countries countries={countries} />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);