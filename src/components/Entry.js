import React from "react";
import CreateEntry from "./CreateEntry";

// Props only needs to be typed on the RECEIVING component. Like genes. You inherit from parents.

const Entry = props => {
    return (
        <div className="entry">
            <h1>{props.title}</h1>
            <img src={props.image} />
            <h3>{props.day}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default Entry;