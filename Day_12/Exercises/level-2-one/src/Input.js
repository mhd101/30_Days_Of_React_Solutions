import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


export const Input = (props) => {

    const {id, onChange, errorMessage, ...inputProps} = props
  
    const [focus, setFocus] = useState(false);
  
    const handleBlur = (e) => {
      setFocus(true)
    }
    
    return (
      <div>
        <input {...inputProps} onChange={onChange} onBlur={handleBlur} focus={focus.toString()}/>
        <span>{errorMessage}</span>
      </div>
    )
  }