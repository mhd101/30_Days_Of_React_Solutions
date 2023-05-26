import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

// Uncontrolled Components
class App extends React.Component {

  name = React.createRef()

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.name.current.value)
  }

  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='name'>Name: </label>
          <input type='text' name='name' placeholder='Enter your name' ref={this.name}/> 

          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }

}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
