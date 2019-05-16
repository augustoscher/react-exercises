import React from 'react'

export default props => 
  <div>
    <button onClick={() => props.notifyButton('beach')}>
      Going out
    </button>
  </div>