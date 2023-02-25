import React from 'react';
import ReactDOM from 'react-dom/client';

// class App extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       count: 0,
//     }
//   }

//   increment = () => {
//     this.setState((prevState) => ({
//       count: prevState.count + 1 // using previous state
//     }))
//   }

//   decrement = () => {
//     this.setState((prevState) => ({
//       count: prevState.count - 1 // using previous state
//     }))
//   }

//   reset = () => {
//     this.setState({
//       count: 0,
//     })
//   }

//   render(){
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//         <button onClick={this.reset}>Reset</button>
//       </div>
//     )
//   }
// }


// Landscape Application

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      image: 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'
    }
  }

  changeLandscape = () => {
    let image_1 = 'https://images.pexels.com/photos/2387418/pexels-photo-2387418.jpeg'
    let image_2 = 'https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg'

    let image = this.state.image === image_1 ? image_2 : image_1

    this.setState({
      image: image
    })

  }

  render() {
    return (
      <main>
        <div>
          <img src={this.state.image} alt='animal' width='500px'></img>
        </div>
        <button onClick={this.changeLandscape}>Change Landscape</button>
      </main>

    )
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

