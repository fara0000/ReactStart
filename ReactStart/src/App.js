import React from 'react';
import Input from './components/input/Input';
import Button from './components/button/Button';
import Paraghraph from './components/paraghraph/Paraghraph'
import './components/input/input.css';
import './components/button/button.css';
import './components/paraghraph/paraghraph.css';


function App() {
  return (
    <div>
      <div className = 'Open_Container'>
        <h1>SUBMIT FORM...</h1>
        <button className = {'button'}>OPEN</button>
      </div>
    <div className="Login_Container">
      <h1>PROVIDE YOUR CREDITIONALS</h1>
      <p className = {'login_paraghraph'}>Full name:</p>
      <Input 
        type = {'text'}
        className = {'input_login'}
        placeholder = {'Enter your full name...'}
      />
      <p className = {'login_paraghraph'}>Age:</p>
      <Input 
        type = {'number'}
        className = {'input_login'}
        placeholder = {'Enter your age...'}
      />
      <p className = {'login_paraghraph'}>Email:</p>
      <Input 
        type = {'email'}
        className = {'input_login'}
        placeholder = {'Enter your email...'}
      />
      <p className = {'login_paraghraph'}>Phone:</p>
      <Input 
        type = {'number'}
        className = {'input_login'}
        placeholder = {'Enter your phone...'}
      />
      <Button className = {'button'}>SUBMIT</Button>
    </div>
    </div>
  );
}

export default App;
