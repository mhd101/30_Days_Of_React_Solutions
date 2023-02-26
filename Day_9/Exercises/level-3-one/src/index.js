/* eslint-disable no-useless-constructor */
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Main extends React.Component{
  constructor(props){
    super(props)
  }
  render() {
    return (
      <>
      <h1>{this.props.data.name}</h1>
      <h1>{this.props.data.position}</h1>
      <h1>{this.props.data.techs}</h1>
      </>
    )
  }
}

class App extends React.Component {
  state = {
    status: false
  }

  data = {
    name: 'mhd101',
    position: 'Junior Developer',
    techs: 'Html, Css, Javascript, React'
  }

  fetchData = () => {
    setTimeout(() => {
      const state = this.setState({
        status: true
      })
    }, 3000);
  }
  render(){
    return(
      <div>
        {(this.state.status) && <Main data={this.data} /> }
        <button onClick={this.fetchData}>Fetch Data</button>
      </div> 
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

