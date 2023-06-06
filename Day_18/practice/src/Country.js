import React from 'react'

const Country = ({country: {name, capital, population}}) => {
  return (
    <div>
        <h2>Country Name: {name.common}</h2>
        <p>Capital: {capital}</p>
        <p>Population: {population.toLocaleString()}</p>
    </div>
  )
}

export default Country