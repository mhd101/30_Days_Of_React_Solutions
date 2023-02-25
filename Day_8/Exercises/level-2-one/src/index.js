/* eslint-disable no-useless-constructor */
import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import profile from './images/profile.svg'

class Header extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <header className='header'>
        <p>{this.props.data.welcome}</p>
        <p>{this.props.data.title}</p>
        <p>{this.props.data.name}</p>
      </header>
    )
  }
}



class Main extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='main'>
        <div>
          Prerequisite to get started react.js
        </div>
        <div>
          {this.props.tech}
        </div>
        <div>
          <img src={this.props.image} alt='profile' width='450px'/>
        </div>
      </div>
    )
  }
}

class Button extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div className='button'>
        <button onClick={this.props.changeTheme}>Change Theme</button>
      </div>
    )
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      backgroundColor: '#ffffff',
      color: ''
    }
  }

  changeTheme = () => {
    let lightTheme = '#ffffff'
    let DarkTheme = '#212432'
    let fontLightColor = ''
    let fontDarkColor = '#ffffff'

    let color = (this.state.backgroundColor === lightTheme) ? DarkTheme : lightTheme
    let fontColor = (this.state.color === fontLightColor) ? fontDarkColor : fontLightColor
    this.setState({ backgroundColor: color, color: fontColor });

    <Button style={{backgroundColor: this.state.backgroundColor}} />

  }

  render() {
    const data = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      name: 'Mhd_101',
    }

    const techs = ['HTML', 'CSS', 'JavaScript']
    const techFormatted = techs.map(tech => <li key={tech}>{tech}</li>)

    const divStyle = {
      backgroundColor: this.state.backgroundColor,
      color: this.state.color,
      height: '100vh',
      display:'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItem: 'center',
      gap: '10px'
    }

    return (
      <div style={divStyle}>
        <Header data={data} />
        <Main tech={techFormatted} image={profile}/>
        <Button changeTheme={this.changeTheme} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

