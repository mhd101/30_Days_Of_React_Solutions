/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class GreenBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ backgroundColor: '#21bf73' }} className='box'>
        {this.props.number}
      </div>
    )
  }
}

class YellowBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fddb3a' }} className='box' >

        {this.props.number}
      </div>
    )
  }
}

class RedBox extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div style={{ backgroundColor: '#fd5e53' }} className='box'>
        {this.props.number}
      </div>
    )
  }
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




class Box extends React.Component {

  render() {

    let isPrime = n => {
      if (n === 1 || n === 0) return false;
      if (n === 2 || n === 3) return true;

      for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) return false;

      }
      return true;
    }

    const numArr = []
    for (let i = 0; i < 32; i++) {
      numArr.push(i)
    }

    const numbers = numArr.map(number => {

      if (isPrime(number)) {
        return <RedBox number={number} key={number} />
      } else if (number % 2 === 0) {
        return <GreenBox number={number} key={number} />
      } else if (number % 2 !== 0) {
        return <YellowBox number={number} key={number} />
      }

    })
    return numbers
  }
}

class App extends React.Component {
  render() {
    return (
      <div className='main'>
        <div style={headingStyles}>
          <p style={title}>30 Days Of React</p>
          <p style={subtitle}> Number Generator</p>
        </div>
        <div style={numberStyles}>
          <Box />
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
