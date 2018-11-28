import React from 'react';
import "./Person.css";
const person = (props) => {
    return (
    <div className = "Person">
    
        <p onClick= {props.onClick}>I'm a {props.name} and I am {props.Age} years old.</p>
        {props.children}
        < input type = "text" onChange = {props.changed} />
    </div>
    )
    }; 

export default person;