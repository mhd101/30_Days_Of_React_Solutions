import React from 'react'
import { useOutletContext, useParams } from 'react-router-dom'

const Book = () => {
    const {id} = useParams()
    const obj = useOutletContext()
  return (
    <div>
        <h1>Book {id} {obj.bookAuthor}</h1>
    </div>
  )
}

export default Book