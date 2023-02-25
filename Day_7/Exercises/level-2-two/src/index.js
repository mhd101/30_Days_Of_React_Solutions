/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Header extends React.Component {
  render(){
    let h1Style = {
      fontSize: '2em',
      textAlign: 'center'
    }
    let pStyle = {
      fontSize: '1.4em',
      textAlign: 'center'
    }
    return (
      <header>
        <h1 style={h1Style}>30 Days Of React</h1>
        <p style={pStyle}>Hexadecimal Colors</p>
      </header>
    )
  }
}

class Box extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    let boxStyle = {
      height: '200px',
      width: '200px',
      backgroundColor: this.props.color,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '5px',
      fontSize: '1.4em',
      color: 'white',
      fontWeight: '100'
    }
    return (
      <div style={boxStyle}>
        {this.props.color}
      </div>
    )
  }
}

class BoxContainer extends React.Component {
  render(){
    // generating colors
    let hexaNum = '0123456789abcdef'
    let hexaArr = []
    for(let i = 0; i <= 31; i++){
      let arr = []
      for(let i = 0; i < 6; i++){
        let random = Math.floor(Math.random() * hexaNum.length)
        arr.push(hexaNum[random])
      }
      hexaArr.push(`#${arr.join('')}`)
    }
    
    // Colors Components
    const Colors = () => hexaArr.map(color => <Box color={color} />)

    // Box Container Styles
    let BoxContainerStyle = {
      display: 'grid',
      gridTemplateColumns: 'auto auto auto auto auto auto auto auto',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px'
    }

    return (
      <div style={BoxContainerStyle}>
        <Colors />
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    return (
      <div>
        <Header />
        <BoxContainer />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

