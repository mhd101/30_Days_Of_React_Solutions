import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 2000)
    })
  return (
    <>
    <h1>Not Found Page</h1>
    </>
  )
}

export default NotFound