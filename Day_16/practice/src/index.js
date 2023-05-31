import React from 'react';
import ReactDOM from 'react-dom/client';

// Implementation of Higher Order Component

const Button = ({text, style, onclick}) => {
  return (
    <button onClick={onclick} style={style}>{text}</button>
  )
}

const buttonWithAction = (WrappedComponent, buttonName) => {
  const buttonStyle = {
    backgroundColor: 'red',
    padding: '10px 25px',
    border: 'none',
    borderRadius: 5,
    margin: 3,
    cursor: 'pointer',
    fontSize: 18,
    color: 'white',
  }
  return (props) => {
    return <WrappedComponent style={buttonStyle} text={buttonName}  {...props} />
  }
}

const LoginButton = buttonWithAction(Button, 'Login')
const LogoutButton = buttonWithAction(Button, 'Logout')

const App = () => {

  const handleLogin = () => {
    return alert("Successfully Login!!")
  }

  const handleLogout = () => {
    return alert("Successfully Logout!!")
  }

  return (
    <div>
      <LoginButton onclick={handleLogin}  /> 
      <LogoutButton onclick={handleLogout}  /> 
    </div>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);


