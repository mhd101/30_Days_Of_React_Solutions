import React, { Component } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


class Autumn extends Component {
  render() {
    return (
      <div className='autumn'>AUTUMN</div>
    )
  }
}
class Summer extends Component {
  render() {
    return (
      <div className='summer'>SUMMER</div>
    )
  }
}
class Winter extends Component {
  render() {
    return (
      <div className='winter'>WINTER</div>
    )
  }
}
class Spring extends Component {
  render() {
    return (
      <div className='spring'>SPRING</div>
    )
  }
}



class App extends Component {

  checkSeason = () => {
    const now = new Date()
    if (now.getMonth() === 10 || now.getMonth() === 11 || now.getMonth() === 0 || now.getMonth() === 1) {
      return <Winter />
    } else if (now.getMonth() === 2 || now.getMonth() === 3 || now.getMonth() === 4) {
      return <Spring />
    } else if (now.getMonth() === 5 || now.getMonth() === 6 || now.getMonth() === 7) {
      return <Summer />
    } else {
      return <Autumn />
    }
  }
  
  render() {
    return (
      <div>
        {this.checkSeason()}
      </div>
    )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

