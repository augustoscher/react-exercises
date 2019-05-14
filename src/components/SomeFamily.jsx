import React from 'react'
import Member from './Member'

export default props => 
  <div>
      <h3>Family {props.lastname}</h3>
      <Member name="Carlos" lastName={props.lastname}/>
      <Member name="Nesli" lastName={props.lastname}/>
  </div>