import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


// Generating Random Colors
let hexaNum = '0123456789abcdef'
let hexaArr = []

for (let i = 0; i < 24; i++) {
  let arr = []
  for (let i = 0; i < 6; i++) {
    let random = Math.floor(Math.random() * hexaNum.length)
    arr.push(hexaNum[random])
  }
  hexaArr.push(`#${arr.join('')}`)
}

// Styling each colors div
const hexacolorsStyles = {
  height: '225px',
  width: '225px',
  borderRadius: '5px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: 'whitesmoke',
  fontSize: '1.5em',
  fontWeight: '100',
  cursor: 'pointer'
}

// styling main div that contains all the colors div
const hexaColorsMainDivStyles = {
  display: 'grid',
  justifyContent: 'center',
  gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
  gap: '10px'
}

// styling heading 
const headingStyle = {
  fontSize: '6em',
  fontWeight: '900',
  fontFamily: 'Bebas Neue'
}

// styling subheading
const subHeadingStyle = {
  fontSize: '2em',
  fontWeight: '400',
  fontFamily: 'Bebas Neue'
}

// styling heading main div
const headingMainDivStyles = {
  marginTop: '60px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

// styling main div
const mainDivStyles = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  gap: '30px',
}

// HexaColors component
const HexaColors = () => hexaArr.map(color => <div style={{ backgroundColor: color, ...hexacolorsStyles }} key={color}>{color}</div>)


// App component
const App = () => {
  return (
    <div style={mainDivStyles}>
      <div style={headingMainDivStyles}>
        <p style={headingStyle}>30 Days of React</p>
        <p style={subHeadingStyle}>Hexadecimal Colors</p>
      </div>
      <div style={hexaColorsMainDivStyles}>
        <HexaColors style={hexacolorsStyles}/>
      </div>
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
