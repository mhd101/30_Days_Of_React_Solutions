import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  state = {
    firstName: '',
    lastName: '',
    email: '',
    tel: '',
    dateOfBirth: '',
    weight: '',
    gender: '',
    bio: '',
    favoriteColor: '#ffffff',
    file: '',

    validate: {
      firstName: false,
      lastName: false,
      email: false,
      tel: false,
      dateOfBirth: false,
      weight: false,
      gender: false,
      bio: false,
      favoriteColor: false,
      file: false
    }
  }

  handleChange = (e) => {
    const {name, value, type} = e.target

    if(type === 'file'){
      this.setState({[name]: e.target.files[0].type})
    } else {
      this.setState({
        [name] : value
      })
    }
  }

  handleBlur = (e) => {
    const {name} = e.target
    this.setState({
      validate: {...this.state.validate, [name]: true}
    })
  }

  validate = () => {
    const errors = {
      firstName: '',
      lastName: '',
      email: '',
      tel: '',
      dateOfBirth: '',
      weight: '',
      gender: '',
      bio: '',
      favoriteColor: '',
      file: ''
    }

    let emailRegex = /^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/
    let telRegex = /^[+]*[(]{0,1}[0-9]{1,3}[)]{0,1}[-\s\\./0-9]*$/g


    if((this.state.validate.firstName && this.state.firstName.length <= 3) || (this.state.validate.firstName && this.state.firstName.length > 12)){
      errors.firstName = 'First name should be between 3 and 12'
    } else if((this.state.validate.lastName && this.state.lastName.length <= 3) || (this.state.validate.lastName && this.state.lastName.length > 12)){
      errors.lastName = 'Last name should be between 3 and 12'
    } else if(this.state.validate.email && !(this.state.email.match(emailRegex))){
      errors.email = 'Enter correct Email'
    } else if(this.state.validate.tel && !(this.state.tel.match(telRegex))){
      errors.tel = 'Enter correct Phone No.'
    } else if(this.state.validate.file && !(this.state.file === 'image/jpeg')){
      errors.file = 'Only Jpeg Image Supported'
    }

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if(this.state.firstName !== '' && this.state.lastName !== '' && this.state.email !== '' && this.state.tel !== '' && this.state.dateOfBirth !== '' && this.state.weight !== '' && this.state.gender !== '' && this.state.favoriteColor !== '' && this.state.file !== 'ima'){
      console.log(this.state)
    } 
  }

  render() {
    const {firstName, lastName,email, tel, file} = this.validate()
    const {bio} = this.state
    return (
      <div>
        <form onSubmit={this.handleSubmit} noValidate>
          <div>
            <label htmlFor='firstName'>FirstName: </label>
            <input type='text' name='firstName' value={this.state.firstName} id='firstName' onBlur={this.handleBlur} onChange={this.handleChange} />
            <p style={{color: 'red'}}>{firstName}</p>
          </div>
          <div>
            <label htmlFor='lastName'>LastName: </label>
            <input type='text' name='lastName' value={this.state.lastName} id='lastName' onBlur={this.handleBlur} onChange={this.handleChange} />
            <p style={{color: 'red'}}>{lastName}</p>
          </div>
          <div>
            <label htmlFor='email'>Email: </label>
            <input type='email' name='email' value={this.state.email} id='email' onBlur={this.handleBlur} onChange={this.handleChange} />
            <p style={{color: 'red'}}>{email}</p>
          </div>
          <div>
            <label htmlFor='tel'>Phone: </label>
            <input type='phone' name='tel' value={this.state.tel} id='tel' onBlur={this.handleBlur} onChange={this.handleChange} />
            <p style={{color: 'red'}}>{tel}</p>
          </div>
          <div>
            <label htmlFor='dateOfBirth'>DOB: </label>
            <input type='date' name='dateOfBirth' value={this.state.dateOfBirth} id='dateOfBirth' onBlur={this.handleBlur} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor='weight'>Weight: </label>
            <input type='number' name='weight' value={this.state.weight} id='weight' onBlur={this.handleBlur} onChange={this.handleChange} />
          </div>
          
          <div className='gender'>
            Gender
            <div>
              <input type='radio' name='gender' value='male' id='male' onBlur={this.handleBlur} onChange={this.handleChange} checked={this.state.gender === 'male'} />
              <label htmlFor='male'>Male</label>
              <input type='radio' name='gender' value='female' id='female' onBlur={this.handleBlur} onChange={this.handleChange} checked={this.state.gender === 'female'} />
              <label htmlFor='female'>Female</label>
            </div>
          </div>

          <div className='bio'>
            <label htmlFor='bio'>Bio: </label>
            <textarea value={bio} onChange={this.handleChange} name='bio'></textarea>
          </div>

          <div>
            <label htmlFor='favoriteColor'>favoriteColor: </label>
            <input type='color' name='favoriteColor' value={this.state.favoriteColor} id='favoriteColor' onBlur={this.handleBlur} onChange={this.handleChange} />
          </div>

          <div>
            <label htmlFor='file'>Select File: </label>
            <input type='file' name='file' id='file' onBlur={this.handleBlur} onChange={this.handleChange} />
            <p style={{color: 'red'}}>{file}</p>
          </div>

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }
}





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

