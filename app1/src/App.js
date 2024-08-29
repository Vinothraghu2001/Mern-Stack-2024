import logo from './logo.svg';
import './App.css';
import Home from './Home';
import {useState} from 'react';

function App() {
  let firstname = "vinothRaghuram";
  const [email,setEmail] = useState('');
  const [address,setAddress] = useState('chennai');
  const [number,setNumber] = useState('');
  const validate=() =>{
        if(email == ""){
          alert("email is empty");
        }else if(number == ""){
           alert("number is empty")

        }else{
          alert("everything is fine")
        }
  }
  return (
    <div className="container">
      <center><h1>this is react App</h1>
      {firstname}
     <div>{email}</div> 
     <div>{address}</div></center>
     <div>{number}</div>
      <Home/>
      <div><input type='text' onChange={(e) => setEmail(e.target.value)}/></div>

      <input type='text' onChange={(e) => setNumber(e.target.value)}/>
      <button onClick={()=>validate()}>Submit</button>
      </div>
  );
}

export default App;
