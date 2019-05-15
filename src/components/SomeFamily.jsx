import React from 'react'
import {copyPropsChildrenComponents} from '../utils/Utils'

export default props => 
  <div>
      <h3>Family {props.lastName}</h3>
      {/* propagate component props to children components 
        {React.cloneElement(props.children, {lastName: props.lastName})}  
      */}
      
      {/* propagate all props of component to children components by cloning.
          works only with just one children.
          {React.cloneElement(props.children, {...props})}
      */}
      
      {/* 1st param: all children, 2nd param: component 
          clone all child elements added to "SomeFamily" component, passing all props  
      */}
      {/* {React.Children.map(props.children, component => {
        return React.cloneElement(component, {...props})
      })} */}
      {copyPropsChildrenComponents(props)}
      
  </div>