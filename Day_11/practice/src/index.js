import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      message: "",
    }
  }


  handleKeyPress = (e) => {
    this.setState({
      message: `${e.target.value} has been pressed`
    })
  }

  render() {
    return (
      <div>
        <label htmlFor=''> Test for onKeyPress Event: </label>
        <input type='text' onKeyPress={this.handleKeyPress} />
        {this.state.message}
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

