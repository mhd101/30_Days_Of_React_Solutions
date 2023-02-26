import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Morning extends React.Component {
  render(){
    return (
      <div className='morning'>
        MORNING
      </div>
    )
  }
}
class Noon extends React.Component {
  render(){
    return (
      <div className='noon'>
        NOON
      </div>
    )
  }
}
class Evening extends React.Component {
  render(){
    return (
      <div className='evening'>
        EVENING
      </div>
    )
  }
}
class Night extends React.Component {
  render(){
    return (
      <div className='night'>
        NIGHT
      </div>
    )
  }
}

class App extends React.Component {
  checkTime = () => {
    const now = new Date()
    let time = now.getHours()
    console.log(time)
    if(time >= 0 && time <= 6){
      return <Night />
    } else if(time >= 7 && time <= 12){
      return <Morning />
    } else if(time >=13 && time <= 18){
      return <Noon />
    } else {
      return <Evening />
    }
  }
  render(){
    return (
      <>
        {this.checkTime()}
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


