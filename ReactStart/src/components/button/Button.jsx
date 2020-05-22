import React from 'react';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {
            className,
            children 
        } = this.props
        
        
        return (
            <button
            className = {className} 
            > {children} </button>
        )
    }
}

export default Button;