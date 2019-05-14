import React from 'react' 

const CompA = props => 
    <p>First Says: {props.value}</p>

const CompB = props => 
    <p>Second   Says: {props.value}</p>

export {CompA, CompB}