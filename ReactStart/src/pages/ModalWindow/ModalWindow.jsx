import React from 'react';
import '../ModalWindow/modalWindow.css'
import Input from '../../components/input/Input';
import Button from '../../components/button/Button';
import {sendPutRequest} from '../../REST'

class ModalWindow extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            inputValues: {}
            // name : '',
            // email : '',
            // age : '',
            // phone : ''
        }
        // this.handleName = this.handleName.bind(this);
        // this.handleAge = this.handleAge.bind(this);
        // this.handleEmail = this.handleEmail.bind(this);
        // this.handlePhone = this.handlePhone.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }  

    inputChangeHandler = (e) => {
        const {name, value} = e.target;

        this.setState(prevState => ({
            inputValues : {
            ...prevState.inputValues,
            [name] : value
            }
        }));
    }

    checkFormHandler = (e) => {
        e.preventDefault();
        console.log( this.state.inputValues );  
        const person = this.state;
        let object = {person}
        let formData = new FormData(document.forms.person);
    
        formData.forEach(function(value, key){
            object[key] = value;
        });
        console.log(object);
        sendPutRequest(object);
        return false;
    }
    // handleName(e) {
    //     const value = e.target.value;
    //     this.setState({userName: value})
    //     console.log(this.state);
    // }

    // handleAge(e) {
    //     const value = e.target.value;
    //     this.setState({age:value})
    //     console.log(this.state);
    // }

    // handleEmail(e) {
    //     const value = e.target.value;
    //     this.setState({email:value})
    //     console.log(this.state);
    // }

    // handlePhone(e) {
    //     const value = e.target.value;
    //     this.setState({phone:value})
    //     console.log(this.state);
    // }

    // handleSubmit() {
        // const person = this.state;
        // let object = {person}
        // let formData = new FormData(document.forms.person);
    
        // formData.forEach(function(value, key){
        //     object[key] = value;
        // });
        // console.log(object);
    //     sendPutRequest(object)
    // }
    

    render () {
        // const {
        //     name,
        //     email,
        //     age,
        //     phone
        // } = this.state

        return (
            <form onClick = {this.handleSubmit} onSubmit={this.checkFormHandler}>
                <div className="Login_Container" >
                    <h1>PROVIDE YOUR CREDITIONALS</h1>
                    <p className = {'login_paraghraph'}>Full name:</p>
                    <Input 
                        type = {'text'}
                        name = 'login'
                        className = {'input_login'}
                        placeholder = {'Enter your full name...'}
                        onChange={this.inputChangeHandler}
                        // onChange = {this.handleName}
                    />
                    <p className = {'login_paraghraph'}>Age:</p>
                    <Input 
                        type = {'number'}
                        name = 'age'
                        className = {'input_login'}
                        placeholder = {'Enter your age...'}
                        // onChange = {this.handleAge}
                        onChange={this.inputChangeHandler}
                    />
                    <p className = {'login_paraghraph'} >Email:</p>
                    <Input 
                        type = {'email'}
                        name = 'email'
                        className = {'input_login'}
                        placeholder = {'Enter your email...'}
                        // onChange = {this.handleEmail}
                        onChange={this.inputChangeHandler}
                    />
                    <p className = {'login_paraghraph'}>Phone:</p>
                    <Input 
                        type = {'number'}
                        name = 'number'
                        className = {'input_login'}
                        placeholder = {'Enter your phone...'}
                        // onChange = {this.handlePhone}
                        onChange={this.inputChangeHandler}
                    />
                    <Button className = 'button' type = 'submit'>SUBMIT</Button>
                </div>
            </form>
        )  
    }
}
export default ModalWindow;