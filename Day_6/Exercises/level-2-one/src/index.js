/* eslint-disable array-callback-return */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Greenbox Component
const GreenBox = (props) => {
  return (<div style={{ backgroundColor: '#21bf73' }} className='box'>
    {props.number}
  </div>
  )
}

// Redbox Component
const RedBox = (props) => {
  return (<div style={{ backgroundColor: '#fd5e53' }} className='box'>
    {props.number}
  </div>
  )
}

// Yellowbox Component
const YellowBox = (props) => {
  return (<div style={{ backgroundColor: '#fddb3a' }} className='box'>
    {props.number}
  </div>
  )
}

// check prime no function
let isPrime = n => {
  if (n === 1 || n === 0) return false;
  if (n === 2 || n === 3) return true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;

  }
  return true;
}

// Numbers Component
const Numbers = (props) => {
  
  const numArr = []
  for (let i = 0; i < 32; i++) {
    numArr.push(i)
  }

  const numbers = numArr.map(number => {
    
    if (isPrime(number)) {
      return <RedBox number={number} key={number} />
    } else if (number % 2 === 0) {
      return <GreenBox number={number} key={number}/>
    } else if (number % 2 !== 0) {
      return <YellowBox number={number} key={number} />
    }

  })
  return numbers

}

// Styling Components

const headingStyles = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px'
}

const title = {
  fontSize: '3em',
  fontWeight: '900'
}

const subtitle = {
  fontSize: '2em',
  fontWeight: '600'
}

const numberStyles = {
  display: 'grid',
  gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '10px',
  marginTop: '30px'
}

const App = () => {
  return (
    <div className='main'>
      <div style={headingStyles}>
        <p style={title}>30 Days Of React</p>
        <p style={subtitle}> Number Generator</p>
      </div>
      <div style={numberStyles}>
        <Numbers />
      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

