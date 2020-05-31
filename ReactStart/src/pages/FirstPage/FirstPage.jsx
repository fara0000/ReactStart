import React from 'react';
import '../FirstPage/firstPage.css'
import ModalWindow from '../ModalWindow/ModalWindow'

class FirstPage extends React.Component {
    constructor (props) {
        super(props)
        this.state = {showModal : false}
    }

    changeToModalWindow = isShow => {
        this.setState({showModal:isShow})
    }

    render () {
        const { changeToModalWindow } = this;
        const { showModal } = this.state;
        return (
            <>
            {
                showModal ? (<ModalWindow/>) :
                <div className = 'Open_Container'>
                    <h1>SUBMIT FORM...</h1>
                    <button className = {'button'} onClick = {changeToModalWindow}>OPEN</button>
                </div>
            }
            </>
        )
    }
}

export default FirstPage;