import React from 'react';

class Input extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {

        return (
            <input
                {...this.props}
            />
        )
    }
}
export default Input;