import React from 'react'
import '../App.css'
import {BiStoreAlt} from 'react-icons/bi'

const AboutPage = () => {
  return (
    <div className='about-page-container'>
        <span>
            <BiStoreAlt size={'100px'} color='black' />
        </span>
        <h1 className='about-page-title'>About Page</h1>
        <p className='about-page-desc'>This is the about page of the Router Store.</p>
    </div>
  )
}

export default AboutPage