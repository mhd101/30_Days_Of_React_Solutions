import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

let hexaArr = []

const hexaGenerator = () => {
  let hexa = '0123456789abcdef'

  for (let i = 0; i < 6; i++) {
    let arr = []
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * hexa.length)
      arr.push(hexa[random])
    }
    hexaArr.push(`#${arr.join('')}`)
  }

  return hexaArr

}

hexaGenerator(); // Generated six random colors

const mappedColors = hexaArr.map(color => <div key={color} style={{backgroundColor: color}}>{color}</div>)

const App = () => (
  <div className='card'>
      {mappedColors}
  </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

