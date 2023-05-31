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
      <div>
      <h1>{this.props.data.name}</h1>
      <h1>{this.props.data.position}</h1>
      <h1>{this.props.data.techs}</h1>
      </div>
    )
  }
}

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      status: false
    }
  }

  data = {
    name: 'mhd101',
    position: 'Junior Developer',
    techs: 'Html, Css, Javascript, React'
  }



  fetchData(){
    setTimeout(() => {
      this.setState({status: true})
    }, 3000);
  }


  render(){
    console.log(this.state.status)
    return(
      <div>
        {(this.state.status) ? <Main data={this.data} /> : 'Fetching data...' } 
        <button  onClick={this.fetchData.bind(this)}>Fetch Data</button>
      </div>
    )
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

