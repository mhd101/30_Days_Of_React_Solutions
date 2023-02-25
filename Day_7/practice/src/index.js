import React from 'react';
import ReactDOM from 'react-dom/client';

// class TechList extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props) {
//     super(props)
//   }
//   render() {
//     const techs = ['HTML', 'CSS', 'JAVASCRIPT', 'REACT']
//     const techListFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
//     return techListFormatted
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <TechList />
//       </div>
//     )
//   }
// }

// Accessing Props in class components

// class Header extends React.Component {
//   // eslint-disable-next-line no-useless-constructor
//   constructor(props){
//     super(props)
//   }
//   render(){
//     console.log(this.props.data);
//     const {welcome, title, subtitle} = this.props.data
//     return (
//       <div>
//         <h1>{welcome}</h1>
//         <h2>{title}</h2>
//         <h3>{subtitle}</h3>
//       </div>
//     )
//   }
// }

// class App extends React.Component {
//   render(){
//     const data = {
//       welcome: 'Welcome to 30 Days Of React',
//     title: 'Getting Started React',
//     subtitle: 'JavaScript Library'
//     }
//     return (
//       <div>
//         <Header data={data} />
//       </div>
//     )
//   }
// }

// Methods in Class Components

class Header extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props){
    super(props)
  }
  greet = () => {
   return alert("Hello Mhd_101")
  }
  render(){
    console.log(this.props.data);
    const {welcome, title, subtitle} = this.props.data
    return (
      <div>
        <h1>{welcome}</h1>
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <button onClick={this.greet}>Click on the Button</button>
      </div>
    )
  }
}

class App extends React.Component {
  render(){
    const data = {
    welcome: 'Welcome to 30 Days Of React',
    title: 'Getting Started React',
    subtitle: 'JavaScript Library'
    }
    return (
      <div>
        <Header data={data} />
      </div>
    )
  }
}



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
