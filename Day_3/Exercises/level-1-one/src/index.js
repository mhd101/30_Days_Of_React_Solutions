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

const heading = (
  <header style={headerStyle}>
    <h2>Front End Technologies</h2>
  </header>
)

const imgStyle = {
  display: 'flex',
  justifyContent: 'center',
  gap: '10px'
}

const body = (
  <div style={imgStyle}>
    <img src={html} width='300'></img>
    <img src={css} width='300'></img>
    <img src={javascript} width='300'></img>
    <img src={react} width='300'></img>
  </div>
)

const mainStyle = {
  border: '1px solid red',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center'

}
const app = (
  <div style={mainStyle}>
    {heading}
    {body}
  </div>
)

root.render(app, root)
