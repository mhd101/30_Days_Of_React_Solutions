/* eslint-disable no-unused-vars */
import React from 'react'
import  ReactDOM  from 'react-dom'
import reactImage from './images/react.png'

const rootElement = document.getElementById('root')
const jsxElement = <h1>This is JSX Element</h1>

// eslint-disable-next-line jsx-a11y/alt-text
const image = <img src={reactImage}></img>

ReactDOM.render(image,rootElement)

