import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Input } from './Input';


const App = () => {


  const [values, setValues] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      id: 1,
      name: 'name',
      type: 'text',
      placeholder: 'Enter your Name',
      errorMessage: "Please Enter Your Name",
      pattern: '^[A-Za-z]{3,10}$',
      required: true,
    },
    {
      id: 2,
      name: 'username',
      type: 'text',
      placeholder: 'Enter your Username',
      errorMessage: "Username should be 3-16 characters",
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
    {
      id: 3,
      name: 'email',
      type: 'email',
      placeholder: 'Enter your Email',
      errorMessage: "It should be valid email address",
      required: true,
    },
    {
      id: 4,
      name: 'password',
      type: 'password',
      placeholder: 'Enter your Password',
      errorMessage: "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 character",
      pattern: '^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$',
      required: true,
    },
    {
      id: 5,
      name: 'confirmPassword',
      type: 'password',
      placeholder: 'Re-enter your password',
      errorMessage: "Password doesn't match",
      pattern: values.password,
      required: true,
    },
    
  ]

  const onChange = (e) => {
    setValues({...values, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(values)
  }
  
  return (

    <div>
      <form onSubmit={handleSubmit}>
        <h2>React Form</h2>

        {inputs.map((input) => <Input key={input.id} {...input} value={values[input.name]} onChange={onChange} /> )}
        
        <button type='submit'>Submit</button>
      </form>
    
      
    </div>
  )
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

