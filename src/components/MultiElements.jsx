import React from 'react' 

//return array of elements
export default (props) => [
    <p>Pt. 1</p>,
    <p>Pt. 2</p>
]

//solution 1: Most Commom
// export default (props) => 
//     <div>
//         <p>Pt. 1</p>
//         <p>Pt. 2</p>
//     </div>

//solution 2: 
// export default props => 
//     <React.Fragment>
//         <h1>Pt. 1</h1>
//         <h2>Pt. 2</h2>
//     </React.Fragment>
    