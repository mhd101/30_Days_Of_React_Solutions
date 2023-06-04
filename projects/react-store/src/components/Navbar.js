import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
        <header>
            <div className='logo'>
                <Link to={'/'}><h2>Router Store</h2></Link>
            </div>
            <div className='links'>
                <Link to={'/'}>Home</Link>
                <Link to={'/allProducts'}>Products</Link>
                <Link to={'/about'}>About</Link>
            </div>
        </header>
  )
}

export default Navbar