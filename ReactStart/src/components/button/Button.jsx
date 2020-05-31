import React from 'react';
import '../button/button.css';

class Button extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return <button {...this.props}/> 
    }
}

export default Button;