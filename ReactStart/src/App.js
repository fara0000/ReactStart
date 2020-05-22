import React, {useState} from 'react';
import './components/input/input.css';
import './components/button/button.css';
import './components/paraghraph/paraghraph.css';
import Input from './components/input/Input'
import Button from './components/button/Button'


function ModalWindow() {
  // const [color, setColor] = useState('red');
  // const state = {
  //   formControls: {
  //     name: {
  //       value: '',
  //       type:'text',
  //       ErrorMessage: 'Enter correct data!',
  //       valid:false,
  //       touched:false,
  //       validation: {
  //         required:true,
  //         text:true
  //       }
  //     },
  //     email: {
  //       value: '',
  //       type:'email',
  //       ErrorMessage: 'Enter correct data!',
  //       valid:false,
  //       touched:false,
  //       validation: {
  //         required:true,
  //         email:true
  //       }
  //     },
  //     phone:{
  //       value: '',
  //       type:'number',
  //       ErrorMessage: 'Enter correct data!',
  //       valid:false,
  //       touched:false,
  //       validation: {
  //         required:true,
  //         number:true
  //       }
  //     },
  //     age:{
  //       value: '',
  //       type:'number',
  //       ErrorMessage: 'Enter correct data!',
  //       valid:false,
  //       touched:false,
  //       validation: {
  //         required:true,
  //         minLength: 1
  //       }
  //     }
  //   }
  // }
  const [array, setArray] = useState([]);
  const [login, setLogin] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const getValueOfInputs = () => {
    const arrayActual = array.concat(login,age,email,phone);
    setArray(arrayActual);
  }

  return (
    <div className="Login_Container">
      <h1>PROVIDE YOUR CREDITIONALS</h1>
      <p className = {'login_paraghraph'}>Full name:</p>
      <Input 
        type = {'text'}
        className = {'input_login'}
        placeholder = {'Enter your full name...'}
        value = {login}
        onChange = {(event) => setLogin(event.target.value)}
      />
      <p className = {'login_paraghraph'}>Age:</p>
      <Input 
        type = {'number'}
        className = {'input_login'}
        placeholder = {'Enter your age...'}
        value = {age}
        onChange = {(event) => setAge(event.target.value)}
      />
      <p className = {'login_paraghraph'}>Email:</p>
      <Input 
        type = {'email'}
        className = {'input_login'}
        placeholder = {'Enter your email...'}
        value = {email}
        onChange = {(event) => setEmail(event.target.value)}
      />
      <p className = {'login_paraghraph'}>Phone:</p>
      <Input 
        type = {'number'}
        className = {'input_login'}
        placeholder = {'Enter your phone...'}
        value = {phone}
        onChange = {(event) => setPhone(event.target.value)}
      />
      <Button className = 'button' onClick = {getValueOfInputs}>SUBMIT</Button>
      {/* <Button className='button' onClick={}>Change color<Button> */}
    </div>
  )
}

function App () {
  const [isOpen, setIsOpen] = useState(false);
  // console.log(isOpen);
  return (
    <div>
      <div className = 'Open_Container'>
        <h1>SUBMIT FORM...</h1>
        <button className = {'button'} onClick = {() => setIsOpen(!isOpen)}>{isOpen ? 'CLOSE' : 'OPEN'}</button>
      </div>
      {isOpen && <ModalWindow/>}
    </div>
  );
}

export default App;
