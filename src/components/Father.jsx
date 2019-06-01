import React from 'react'
import Son from './Son'

export default props => {
    const actionFunction = param => {
        alert(`You can go to the ${param}`)
    }
    
    return (
        <Son notifyButton={actionFunction}></Son>
    )
}
