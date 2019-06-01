import React from 'react'

export default class ComponentClass extends React.Component {
    render() {
        return (
            <div>
                <h3>My Class Component</h3>
                <h3>My Param: {this.props.param || 'Default Param'}</h3>
            </div>
        );
    }
}
   