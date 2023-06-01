import React from "react";
import ReactDOM from "react-dom/client";


const Input = (props) => {
  return (
    <div>
      <input type={props.type} {...props} />
    </div>
  )
}

const changeInput = (WrappedComponent,inputType) => {
  return (props) => {
    console.log(props)
    return <WrappedComponent type={inputType} {...props} />
  }
}

const Name = changeInput(Input,'text')
const Email = changeInput(Input,'email')
const Password = changeInput(Input,'password')
const Color = changeInput(Input,'color')
const Date = changeInput(Input,'date')
const File = changeInput(Input,'file')
const Range = changeInput(Input,'range')
const Time = changeInput(Input,'time')
const Button = changeInput(Input,'button')


const App = () => {
  return (
  <div>
    <Name placeholder="Enter your Name" />
    <Email placeholder="Enter your Email" />
    <Password placeholder="Enter your Password" />
    <Color />
    <Date />
    <Range />
    <Time />
    <File />
    <Button value="Submit" />
  </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
