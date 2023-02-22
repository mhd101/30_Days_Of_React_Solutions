/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import ReactDOM from 'react-dom/client';

import html from './images/html.png'
import css from './images/css.png'
import javascript from './images/javascript.png'
import react from './images/react.png'

const root = ReactDOM.createRoot(document.getElementById('root'));

const headerStyle = {
  padding: '20px',
  textAlign: 'center',
  fontFamily: 'Outfit, sans-serif',
  fontWeight: '200'
}

const Heading = (props) => (
  <header style={headerStyle}>
    <h2>{props.heading}</h2>
  </header>
)

const imgStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px'
}

const techsImg = [html, css, javascript, react]

const techsImgFormatted = techsImg.map(img => <img key={img} src={img} width='300'></img>)

const Body = () => {
  return (
    <div style={imgStyle}>
      {techsImgFormatted}
    </div>
  )
}


const mainStyle = {
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'
}

const App = () => (
  <div style={mainStyle}>
    <Heading heading='Front-End Technologies' />
    <Body />
  </div>
)

root.render(<App />, root)
