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
        <h1>{props.name}</h1>
        <h2>{props.lastName}</h2>
    </div>
