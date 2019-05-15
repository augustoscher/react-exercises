import React from 'react'

//function based component
// function first() {
//     return <h1>First Component</h1>
// }

//anonim function
// export default function () {
//     return <h1>First Component</h1>
// }

export default (props) => 
    <div>
        <p>{props.name}</p>
        <p>{props.lastName}</p>
    </div>
