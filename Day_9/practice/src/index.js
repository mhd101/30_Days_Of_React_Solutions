/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Conditional Rendering using If Else..

// const btnStyle = {
//   border: 'none',
//   padding: '10px 20px',
//   backgroundColor: 'gray',
//   cursor: 'pointer',
// }

// class Button extends React.Component {
//   constructor(props){
//     super(props)
//   }
//   render(){
//     return (
//       <button style={btnStyle} onClick={this.props.onClick}>{this.props.text}</button>
//     )
//   }
// }

// class App extends React.Component {
//   state = {
//     loggedIn: false,
//   }

//   isLoggedIn = () => {
//     this.setState({
//       loggedIn: !this.state.loggedIn,
//     })
//   }

//   render(){

//     let status = null
//     let text = null

//     if(this.state.loggedIn){
//       status = 'Welcome to 30 Days of React'
//       text = 'Logout'
//     } else {
//       status = 'Please Login'
//       text = 'Login'
//     }
//     return (
//       <div>
//         <p>{status}</p>
//         <Button text={text} onClick={this.isLoggedIn} />
//       </div>
//     )
//   }
// }

// Conditional Rendering using Ternary Operator

// const btnStyle = {
//   border: 'none',
//   padding: '10px 20px',
//   backgroundColor: 'gray',
//   cursor: 'pointer',
// }

// class Button extends React.Component {
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     return (
//       <button style={btnStyle} onClick={this.props.onClick}>{this.props.text}</button>
//     )
//   }
// }

// class Login extends React.Component {
//   render() {
//     return (
//       <p>
//         Please Login
//       </p>
//     )
//   }
// }

// class Welcome extends React.Component {
//   render() {
//     return (
//       <p>
//         Welcome to 30 days of React
//       </p>
//     )
//   }
// }



// class App extends React.Component {
//   state = {
//     loggedIn: false,
//   }

//   isLoggedIn = () => {
//     this.setState({
//       loggedIn: !this.state.loggedIn,
//     })
//   }

//   render() {

//     let status = (this.state.loggedIn) ? <Welcome /> : <Login />

//     return (
//       <div>
//         {status}
//         <Button text={this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.isLoggedIn} />
//       </div>
//     )
//   }
// }


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);

// && Conditional Rendering

const btnStyle = {
  border: 'none',
  padding: '10px 20px',
  backgroundColor: 'gray',
  cursor: 'pointer',
}

class Button extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <button style={btnStyle} onClick={this.props.onClick}>{this.props.text}</button>
    )
  }
}

class Welcome extends React.Component {
  render() {
    return (
      <p>
        Welcome to 30 days of React
      </p>
    )
  }
}

class App extends React.Component {
  state = {
    loggedIn: false,
  }

  isLoggedIn = () => {
    this.setState({
      loggedIn: !this.state.loggedIn,
    })
  }

  render() {


    let status = (this.state.loggedIn) && <Welcome />
    const techs = ['HTML', 'CSS', 'JS']

    return (
      <div>
        {status}
        {techs.length === 3 && <p>You have all the prerequisite courses to get started react</p>}
        {!this.state.loggedIn && <p>Please login to access more information about 30 Days Of React
            challenge</p>}
        <Button text={this.state.loggedIn ? 'Logout' : 'Login'} onClick={this.isLoggedIn} />
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

