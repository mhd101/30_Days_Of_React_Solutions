import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    username: '',
    password: '',
    profile: '',
    validate: {
      firstname: false,
      lastname: false,
      email: false,
      username: false,
      password: false,
      profile: false,
    }
  }

  handleChange = (e) => {
    const { name, value, type } = e.target

    if (type === 'file') {
      this.setState({ profile: e.target.files[0].name })
    } else {
      this.setState({ [name]: value })
    }
  }

  handleBlur = (e) => {
    const { name } = e.target
    this.setState({ validate: { ...this.state.validate, [name]: true } })
  }

  validate = () => {
    const errors = {
      firstname: '',
      lastname: '',
      email: '',
      username: '',
      password: '',
      profile: ''
    }

    let emailValidation = this.state.email.match(/^([a-zA-Z0-9_\-\\.]+)@([a-zA-Z0-9_\-\\.]+)\.([a-zA-Z]{2,5})$/)
    let passwordValidation = this.state.password.match(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
    let allowedExtensions = this.state.profile.match(/(\.jpg|\.jpeg|\.png)$/i)

    if ((this.state.validate.firstname && this.state.firstname.length < 3) || ((this.state.validate.firstname && this.state.firstname.length > 12))) {
      errors.firstname = 'Firstname must be between 3 and 12'
    } else if (((this.state.validate.lastname && this.state.lastname.length < 3) || ((this.state.validate.lastname && this.state.lastname.length > 12)))) {
      errors.lastname = 'Lastname must be between 3 and 12'
    } else if ((this.state.validate.email && !(emailValidation))) {
      errors.email = 'Email should be valid'
    } else if (((this.state.validate.username && this.state.username.length < 3) || ((this.state.validate.username && this.state.username.length > 8)))) {
      errors.username = 'Username must be between 3 and 8'
    } else if ((this.state.validate.password && !(passwordValidation))) {
      errors.password = 'Minimum eight characters, at least one letter, one number and one special character required'
    } else if ((this.state.validate.profile && !(allowedExtensions))) {
      errors.profile = 'Only jpeg, png, jpg allowed'
    }

    return errors
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let { firstname, lastname, email, username, password, profile } = this.validate()

    if (((firstname.length >= 1 || lastname.length >= 1 || email.length >= 1 || username.length >= 1 || password.length >= 1 || profile.length >= 1))) {
      alert('Enter correct Input');
    }else if(this.state.firstname.length === 0 || this.state.lastname.length === 0 || this.state.email.length === 0 || this.state.username.length === 0 || this.state.password.length === 0 || this.state.profile.length === 0){
      alert('All input fields are required')
    } else {
      console.log(this.state)
    }

  }

  render() {
    let { firstname, lastname, email, username, password, profile } = this.validate()

    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Create an Account</h2>
        <div className='input-container'>
          <div>
            <div className='firstname'>
              <label htmlFor='firstname'>Firstname:</label>
              <input type='text' id='firstname' name='firstname' value={this.state.firstname} onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{firstname}</span>
          </div>

          <div>
            <div className='lastname'>
              <label htmlFor='lastname'>Lastname:</label>
              <input type='text' id='lastname' name='lastname' value={this.state.lastname} onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{lastname}</span>
          </div>

          <div>
            <div className='email'>
              <label htmlFor='email'>Email:</label>
              <input type='email' id='email' name='email' value={this.state.email} onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{email}</span>
          </div>

          <div>
            <div className='username'>
              <label htmlFor='username'>Username:</label>
              <input type='text' id='username' name='username' value={this.state.username} onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{username}</span>
          </div>

          <div>
            <div className='password'>
              <label htmlFor='password'>Password:</label>
              <input type='password' id='password' name='password' value={this.state.password} onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{password}</span>
          </div>

          <div>
            <div className='profile'>
              <label htmlFor='profile'>Profile:</label>
              <input type='file' id='profile' name='profile' onBlur={this.handleBlur} onChange={this.handleChange}></input>
            </div>
            <span style={{ color: 'red' }}>{profile}</span>
          </div>

          <div className='submit-btn'>
            <button type='submit'>Signup</button>
          </div>

        </div>
      </form>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

