import React from 'react';
import ReactDOM from 'react-dom/client';

// const Header = () => (
//   <header>
//     <h1>Welcome to 30 Days of React</h1>
//     <h2>Components</h2>
//   </header>
// )


class Header extends React.Component {
  render(){
    return <h1>I am Jsx Element</h1>
  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Header />);

