import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { tenHighestPopulation } from './ten_most_highest_population';


const countriesWithPercent = tenHighestPopulation.map((country) => ({ country: (country.country.toUpperCase()), percent: Math.floor((country.population / tenHighestPopulation[0].population) * 100), population: country.population.toLocaleString('en-US') }))

countriesWithPercent[3].country = 'USA'
countriesWithPercent[9].country = 'RUSSIA'

const CountryName = ({country: {country, percent, population}}) => {
  return (
    <div>
      {country}
    </div>
  )
} 

const CountryPercent = ({country: {country, percent, population}}) => {
  return (
    <div style={{backgroundColor: '#ffa500', width: percent * 10, height: '30px', borderRadius: '5px'}}>

    </div>
  )
} 
const CountryPopulation = ({country: {country, percent, population}}) => {
  return (
    <div>
      {population}
    </div>
  )
} 

const CountriesName = (props) => props.country.map(country => <CountryName country={country} />)
const CountriesPercent = (props) => props.country.map(country => <CountryPercent country={country}/>)
const CountriesPopulation = (props) => props.country.map(country => <CountryPopulation country={country} />)

const countriesNameStyle = {

  width: '200px',
  fontSize: '1.5em',
  fontWeight: '600'
}
const countriesPercentStyle = {
  fontSize: '1.5em',
  fontWeight: '600',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItem: 'center',
  gap: '2px'
}

const countriesPopulationStyle = {
  fontSize: '1.5em',
  fontWeight: '600',

  width: '200px',
}

const countriesMainDivStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItem: 'center',
  gap:'20px',
  padding: '10px 20px',
  width: '70%'
}


const App = () => {
  return (
    <div className='container'>
      <div className='main'>
      <div className='heading'>
        <h2>30 Days Of React</h2>
        <p>World Population</p>
        <p>Ten most Populated Contries</p>
      </div>
      <div style={countriesMainDivStyle}>
        <div style={countriesNameStyle}><CountriesName country={countriesWithPercent} /></div>
        <div style={countriesPercentStyle}><CountriesPercent country={countriesWithPercent} /></div>
        <div style={countriesPopulationStyle}><CountriesPopulation country={countriesWithPercent} /></div>
      </div>
    </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);



