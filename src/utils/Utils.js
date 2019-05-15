import React from 'react'

export function copyPropsChildrenComponents(props) {
    return React.Children.map(props.children, component => {
        return React.cloneElement(component, {...props})
    })
}