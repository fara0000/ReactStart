import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
        console.log('CONSTRUCTOR')
    }

    componentDidMount () {
        console.log('componentDidMount')
    }

    componentDidUpdate () {
        console.log('ComponentDidUpdate')
    }

    render () {
        const {
            type,
            className,
            placeholder,
        } = this.props

        return (
            <input
                className = {className}
                type = {type}
                placeholder = {placeholder}
            />
        )
    }
}
export default Input;