import React from 'react'
// import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div className='login'>
      <div className='container'>
        <div className="form">
          <h1>Login</h1>
          <p>Enter your details bellow to continue--</p>
          <div>
            <Box
              component="form"
              sx={{
                '& > :not(style)': { m: 1, width: '25ch' },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField label="LoginId" color="secondary" focused />
              <TextField label="Password" color="secondary" focused />
             </Box>
             <Button variant="outlined">Submit!!</Button>
          </div>
          <br />
      Click to go for Registration  ---
          <Link class="nav-link active"  to="/reg">
          <Button variant="text"> Registration</Button>
         </Link>

        </div>

      </div>
    </div>
  )
}

export default Login