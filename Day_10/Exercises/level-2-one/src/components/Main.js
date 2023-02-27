import React from "react";

const Main = (props) => {
    return (
        <div className="main">
            <div>
                Prerequisite to get started react.js
            </div>
            <div>
                {props.tech}
            </div>
            <div>
                <img src={props.image} alt='profile' width='350px' />
            </div>
        </div>
    )
}

export default Main;