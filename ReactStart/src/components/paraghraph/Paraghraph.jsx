import React from 'react';

class Paraghraph extends React.Component {
    constructor(props) {
        super(props)
    }
    render () {
        const {
            className,
            children
        } = this.props

        return (
            <p
            className = {className}
            >{children}</p>
        )
    }
}
export default Paraghraph;