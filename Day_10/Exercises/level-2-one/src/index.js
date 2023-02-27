import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header'
import Main from './components/Main'
import Button from './components/Button'
import profile from './profile.svg'


class App extends Component {
  state = {
    backgroundColor: '#ffffff',
    color: '#212432',
    buttonBgColor: '#212432',
    buttonFontColor: '#ffffff'
  }

  changeTheme = () => {
    let lightTheme = '#ffffff'
    let DarkTheme = '#212432'


    let bgColor = (this.state.backgroundColor === lightTheme) ? DarkTheme : lightTheme
    let color = (this.state.color === DarkTheme) ? lightTheme : DarkTheme
    let buttonBgColor = (this.state.buttonBgColor === DarkTheme) ? lightTheme : DarkTheme
    let buttonFontColor = (this.state.buttonFontColor === lightTheme) ? DarkTheme : lightTheme
    this.setState({ backgroundColor: bgColor, color: color,  buttonBgColor: buttonBgColor, buttonFontColor: buttonFontColor });
 }

  render() {

    const data = {
      welcome: 'Welcome to 30 Days of React',
      title: 'Getting Started React',
      name: 'Mhd_101',
    }
  
    const techs = ['HTML', 'CSS', 'JAVASCRIPT']
    const techsFormatted = techs.map(tech => <li key={tech}>{tech}</li>)

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

    const btnStyle = {
      backgroundColor: this.state.buttonBgColor,
      color: this.state.backgroundColor,
    }



    return (
      <div className='container' style={divStyle}>
        <Header data={data} />
        <Main image={profile} tech={techsFormatted} />
        <Button changeTheme={this.changeTheme} btnStyle={btnStyle} />
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


