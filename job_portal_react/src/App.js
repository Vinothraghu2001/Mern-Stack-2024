// Getting data from momgoDB
// Creating data using user inputs and storing in mongodB
import './App.css';
import {useRef, useState} from 'react';

function App() {
  const [jobList,setJobList] = useState([]);
  const nameReff = useRef();
  const cnameRef = useRef();
  const getData=async()=>{
    let res = await fetch("http://localhost:8000/getjob",{method:"GET"});
    let json = await res.json();
    console.log(json);
    setJobList(json);
  }

  const deletejob=async(id)=>{
    let res = await fetch("http://localhost:8000/deletejobbyname?id="+id,{method:"DELETE"});
    if(res.ok){
      alert("deleted")
    }else{
      alert("Error while deleting")
    }
  }

  const createjob=async()=>{
    let data = {
      "name":nameReff.current.value,
      "company_name":cnameRef.current.value
    }
    let res = await fetch("http://localhost:8000/createjob",{method:"POST",body:JSON.stringify(data),
      headers:{"content-type":"application/json"}
    });
    let json = await res.json();
    console.log(json);
  getData()
  }
  return (
    <div>
      <button onClick = {getData}>Click here to get data...</button>
      <div>
        {
          jobList.map((obj,index)=>{
            return(
              <div>
                  <h1 key={index}>{obj.name}</h1>
                  {/* using arrow function coz for passing the _id as argument in normal function we can't pass the arguments */}
                  <div><button onClick={()=>deletejob(obj._id)}>Delete this user</button></div> 
              </div>
              
            )
          })
        }
        <h1>Create Job Form</h1>
        <div><input type = "name" ref = {nameReff} placeholder='Email'/></div>
        <div><input type = "name" ref = {cnameRef}placeholder='password'/></div>
        <button onClick = {createjob}>Create Job</button>
        
      </div>
      
    </div>
  );
}

export default App;