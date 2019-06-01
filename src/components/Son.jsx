import React from 'react'

export default props => 
  <div>
    {/* calls the function passed by props.
      it will pass 'beach' as param of the function.
    */}
    <button onClick={() => props.notifyButton('beach')}>
      Going out
    </button>
  </div>