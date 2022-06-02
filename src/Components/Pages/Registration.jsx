import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';
import axios from 'axios';

const Registration = () => {
  const [task, setTask]= useState([])
  const [state, setState]= useState({
    first:'',
     last:'',
     email:'',
     password:'',
     contact:''     
  })
  const chagneHandler=(event)=>{
    setState({ ...state, [event.target.name]: event.target.value });
     console.log(state);
  }
  const submitHandler=()=>{
    if (state.first && state.last && state.email && state.contact)
    {  setTask([...task, state]);}
    else{ alert ('you have to type something in all fileds')}
    axios.post(`https://6264116b98095dcbf92afd8d.mockapi.io/validation`,state).then(response=>{
      console.log(response.data)
      alert("Data is Saved")
      
  }).catch(err=>{
      console.log(err)
  })
      console.log(state)
      setState({
        first:'',
        last:'',
        email:'',
        password:'',
        contact:''  
      })
  }
  return (
  <div>
      <h1>Registration</h1>
      <div className="container">
    
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="First Name" color="secondary" focused name='first' value={state.first} onChange={chagneHandler} />
              <TextField label="Last Name" color="secondary" focused name='last'value={state.last} onChange={chagneHandler}/>
              <TextField label="Email Id" color="secondary" focused name='email' value={state.email} onChange={chagneHandler}/>
              <TextField label="Password" color="secondary" focused name='password' value={state.password} onChange={chagneHandler}/>
              <TextField label="Contact No" color="secondary" focused name='contact' value={state.contact} onChange={chagneHandler}/>
             </Box>
             <Button variant="outlined" onClick={submitHandler}>Submit!!</Button>
       

      </div>
  </div>
  )
}

export default Registration