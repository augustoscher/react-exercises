import React from 'react'
import Son from './Son'

export default props => {
    const action = place => {
        alert(`You can go to the ${place}`)
    }
    
    return (
        <Son notifyButton={action}></Son>
    )
}
