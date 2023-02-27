import React from "react";


const Header = (props) => {
    return (
        <header className="header">
        <p>{props.data.welcome}</p>
        <p>{props.data.title}</p>
        <p>{props.data.name}</p>
        </header>
    )
}

export default Header;