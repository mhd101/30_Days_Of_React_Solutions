import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       name: ''
//     }
//   }

//   onChange = (e) => {
//     const value = e.target.value
//     this.setState({
//       name: value
//     })
//   }


//   render() {
//     const name = this.state.name
//     return (
//       <div>
//         <label htmlFor='name'>Name: </label>
//         <input type='text' id='name' name='name' placeholder='Enter your name' value={name} onChange={this.onChange} />
//         <h1>{name}</h1>
//       </div>
//     )
//   }
// }

// Getting multiple input data from form

// class App extends Component {

//   constructor(props){
//     super(props)
//     this.state = {
//       firstname: '',
//       lastname: '',
//       username: '',
//       password: ''
//     }
//   }

//   onChange = (e) => {
//     // destructing the name, and value from e.target
//     const {name, value} = e.target 
//     // [variablename] to use a variable name as a key in an object
//     // name refers to the name attribute of the input elements
//     this.setState({[name]: value}) 
//   }

//   onSubmit = (e) => {
//     // stops the default behavior of form elementspecifically refreshing of page
//     e.preventDefault()  
//     console.log(this.state)
//   }

//   render(){
//     // accessing the state value by destrutcturing the state
//     const {firstname, lastname, username, password} = this.state
//     return (
//       <div>
//         <h3>Signup</h3>
//         <form onSubmit={this.onSubmit}>
//           <div>
//             <input type='text' name='firstname'  placeholder='First Name' value={firstname}  onChange={this.onChange} />
//           </div>
//           <div>
//             <input type='text' name='lastname' placeholder='last Name' value={lastname} onChange={this.onChange} />
//           </div>
//           <div>
//             <input type='text' name='username' placeholder='User Name' value={username} onChange={this.onChange} />
//           </div>
//           <div>
//             <input type='password' name='password' placeholder='Enter Password' value={password} onChange={this.onChange} />
//           </div>
//           <button type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// Get data from different input field types

// const countriesOptions = [
//   {
//     value: '',
//     label: '--Select Country--'
//   },
//   {
//     value: 'Finland',
//     label: 'Finland',
//   },
//   {
//     value: 'Sweden',
//     label: 'Sweden',
//   },
//   {
//     value: 'Norway',
//     label: 'Norway',
//   },
//   {
//     value: 'Denmark',
//     label: 'Denmark',
//   }
// ]

// const selectOptions = countriesOptions.map(({ value, label }) => (<option value={value} key={value}> {label}</option>))

// class App extends Component {

//   state = {
//     firstName: '',
//     lastName: '',
//     email: '',
//     tel: '',
//     dateOfBirth: '',
//     weight: '',
//     gender: '',
//     bio: '',
//     skills: {
//       html: false,
//       css: false,
//       javascript: false,
//     },
//     favoriteColor: '#ffffff',
//     file: '',
//     country: ''
//   }

//   changeHandle = (e) => {
//     const { name, value, type, checked } = e.target

//     if (type === 'checkbox') {
//       this.setState({
//         skills: { ...this.state.skills, [name]: checked },
//       })
//     } else if (type === 'file') {
//       this.setState({ [name]: e.target.files[0].name })
//     } else {
//       this.setState({ [name]: value })
//     }
//   }

//   submitHandle = (e) => {
//     e.preventDefault()
//     // console.log(this.state)
//     const { firstName, lastName, email, tel, dateOfBirth, weight, gender, bio, favoriteColor, country, file, skills } = this.state

//     const formattedSkills = []
//     for(const key in skills){
//       formattedSkills.push(key.toUpperCase())
//     }
//     const data = {
//       firstName, lastName, email, tel, dateOfBirth, weight, gender, bio, favoriteColor, country, file, skills: formattedSkills
//     }

//     console.log(data)

//   }


//   render() {
//     const { firstName, lastName, email, tel, dateOfBirth, weight, gender, bio, favoriteColor, country } = this.state
//     return (
//       <div>
//         <form onSubmit={this.submitHandle}>
//           <div className='first_name'>
//             <label htmlFor='firstName'>First Name: </label>
//             <input type='text' id='firstName' name='firstName' value={firstName} onChange={this.changeHandle} />
//           </div>

//           <div className='last_Name'>
//             <label htmlFor='lastName'>Last Name: </label>
//             <input type='text' id='lastName' name='lastName' value={lastName} onChange={this.changeHandle} />
//           </div>

//           <div className='email'>
//             <label htmlFor='email'>Email: </label>
//             <input type='email' id='email' name='email' value={email} onChange={this.changeHandle} />
//           </div>

//           <div className='phone'>
//             <label htmlFor='tel'>Phone No:</label>
//             <input type='phone' id='tel' name='tel' value={tel} onChange={this.changeHandle} />
//           </div>

//           <div className='date_of_birth'>
//             <label htmlFor='dateOfBirth'>Date of Birth: </label>
//             <input type='date' id='dateOfBirth' name='dateOfBirth' value={dateOfBirth} onChange={this.changeHandle} />
//           </div>

//           <div className='weight'>
//             <label htmlFor='weight'>Weight: </label>
//             <input type='number' id='weight' name='weight' value={weight} onChange={this.changeHandle} />
//           </div>

//           <div className='gender'>
//             Gender:
//             <div className='female'>
//               <input type='radio' id='female' name='gender' value='female' onChange={this.changeHandle} checked={gender === 'female'} />
//               <label htmlFor='female'>Female</label>

//               <input type='radio' id='male' name='gender' value='male' onChange={this.changeHandle} checked={gender === 'male'} />
//               <label htmlFor='male'>Male</label>

//             </div>
//           </div>

//           <div className='bio'>
//             <label htmlFor='bio'>Bio: </label>
//             <textarea id='bio' name='bio' value={bio} onChange={this.changeHandle} placeholder='Write about Yourself' cols='30' rows='10'></textarea>
//           </div>

//           <div className='skills'>
//             Skills:
//             <div>
//               <input type='checkbox' id='html' name='html' onChange={this.changeHandle} />
//               <label htmlFor='html'>HTML</label>

//               <input type='checkbox' id='css' name='css' onChange={this.changeHandle} />
//               <label htmlFor='css'>CSS</label>

//               <input type='checkbox' id='javascript' name='javascript' onChange={this.changeHandle} />
//               <label htmlFor='javascript'>JavaScript</label>
//             </div>
//           </div>

//           <div className='color'>
//             <label htmlFor='favoriteColor'>Pick Color: </label>
//             <input type='color' id='favoriteColor' name='favoriteColor' value={favoriteColor} onChange={this.changeHandle} />
//           </div>

//           <div className='file'>
//             <label htmlFor='file'>Select File: </label>
//             <input type='file' id='file' name='file' onChange={this.changeHandle} />
//           </div>

//           <div className='country'>
//             <label htmlFor='select'>Select Country: </label>
//             <select id='select' name='country' value={country} onChange={this.changeHandle}>
//               {selectOptions}
//             </select>
//           </div>

//           <button className='btn' type='submit'>Submit</button>
//         </form>
//       </div>
//     )
//   }
// }

// Form Validation

class App extends Component {
  state = {
    firstName: '',
    lastName: '',
    validate: {
      firstName: false,
      lastName: false,
    }
  }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleBlur = (e) => {
    const { name } = e.target
    this.setState({
      validate: { ...this.state.validate, [name]: true }
    })
  }

  validate = () => {
    const errors = {
      firstName: '',
      lastName: '',
    }
    if ((this.state.validate.firstName && (this.state.firstName.length < 3)) || (this.state.validate.firstName && (this.state.firstName.length > 12))) {
      errors.firstName = 'First name must be between 2 and 12'
    } else if ((this.state.validate.lastName && (this.state.lastName.length < 3)) || (this.state.validate.lastName && this.state.lastName.length > 12)) {
      errors.lastName = 'Last name must be between 2 and 12'
    }
    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.state.firstName !== '' && this.state.lastName !== '') {
      console.log(this.state)
    }
  }

  render() {
    const { firstName, lastName } = this.validate()
    return (
      <div>
        <form onSubmit={this.handleSubmit} >
          <div>
            <label htmlFor='firstname'>FirstName:</label>
            <input type='text' id='firstname' name='firstName' value={this.state.firstName} onChange={this.handleChange} onBlur={this.handleBlur} />
            <p style={{ color: 'red' }}>{firstName}</p>
          </div>
          <div>
            <label htmlFor='lastname'>LastName:</label>
            <input type='text' id='lastname' name='lastName' value={this.state.lastName} onChange={this.handleChange} onBlur={this.handleBlur} />
            <p style={{ color: 'red' }}>{lastName}</p>
          </div>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


