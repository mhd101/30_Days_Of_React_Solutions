import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      top: '',
      left: ''
    }
  }

  handleMouse=(e)=> {

    const maxX = Math.floor(Math.random() * 1450)
    const maxY = Math.floor(Math.random() * 800)

    return this.setState({
      top: `${maxY}px`,
      left: `${maxX}px`
    })
    
  }

  render() {

    const boxStyle = {
      left: this.state.left,
      top: this.state.top,
    }

    return (
      <div>
        <div className='parent'>
        <div onMouseEnter={this.handleMouse} style={boxStyle} className="box">30 Days of React</div>
        </div>
      </div>
    )
  }
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
