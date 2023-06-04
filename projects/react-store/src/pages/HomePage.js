import React from 'react'
import '../App.css'
import {AiFillHome} from 'react-icons/ai'


const HomePage = () => {
  return (
    <div className='home-page-container'>
        <span>
            <AiFillHome size={'100px'} color='black' />
        </span>
        <h1 className='home-page-title'>Home Page</h1>
        <p className='home-page-desc'>This is the home page of the Router Store.</p>
    </div>
  )
}

export default HomePage