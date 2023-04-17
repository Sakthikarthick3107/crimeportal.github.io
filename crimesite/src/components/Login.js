 import { Button, TextField, Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React,{useState,useContext} from 'react'
import AuthContext from '../context/AuthContext'
import StyleBox from '../Theme/StyleBox'

const Login=()=> {
    const[username,setUserName]=useState('')
    const[password,setPassword]=useState('')

    let {loginUser} =useContext(AuthContext)
  return (
    

    <div>
        <Container maxWidth='sm' >
        <StyleBox>
        <Typography variant='h5'  >Login:</Typography><br/>

        <form onSubmit={loginUser}  >

        <Stack spacing={3} direction='column' alignItems='flex-start'>
        
        <TextField required type='text' label='Email Username' name='username' variant='standard'  
                        size='small' value={username}  onChange={(e)=>setUserName(e.target.value)}   
                            fullWidth
                        />

        <TextField required type='password' label='Password' name='password' variant='standard'  
                        size='small' value={password}  onChange={(e)=>setPassword(e.target.value)}   
                            fullWidth
                        />
        <Button type='submit' variant='contained'>Login</Button>
        
        </Stack>
        </form>
        </StyleBox>
        </Container>
    </div>
  )
}

export default Login