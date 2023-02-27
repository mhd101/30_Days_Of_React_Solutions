import React from "react";

const Button = (props) => {
    return (
        
        <div  className='button'>
            <button onClick={props.changeTheme} style={props.btnStyle}>Change Theme</button>
        </div>
    )
}

export default Button;