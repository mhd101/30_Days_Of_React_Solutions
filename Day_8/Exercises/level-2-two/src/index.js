import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { countriesdata } from './countries_data'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: 'Afghanistan',
      capital: 'Kabul',
      languages: ['Pashto', 'Uzbek', 'Turkmen'],
      population: 27657145,
      flag: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg',
    }
  }
  data = () => {

    let random = Math.floor(Math.random() * countriesdata.length)
    const { name, capital, languages, population, flag, currency } = countriesdata[random]
    this.setState({
      name: name,
      capital: capital,
      languages: languages,
      population: population,
      flag: flag,
    })

  }

  render() {
    return (
      <div className='container'>
        <div className='main'>
          <div>
            <h2>Select a Random Country for your Next Trip!</h2>
          </div>
          <div className='card'>
            <img src={this.state.flag} alt={this.state.name} width='300px' height='150px' />
            <p className='country_name'>{this.state.name}</p>
            <div className='sub_heading'>
              <p><span className='bold'>Capital: </span>{this.state.capital}</p>
              <p><span className='bold'>Languages: </span>{this.state.languages.join(', ')}</p>
            </div>
          </div>
          <button onClick={this.data}>Change Country</button>
        </div>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)
