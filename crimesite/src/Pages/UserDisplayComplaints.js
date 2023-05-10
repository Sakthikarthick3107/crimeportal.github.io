  import React,{useContext, useEffect, useState} from 'react'

import { Container,Box } from '@mui/system';
import { Typography } from '@mui/material';
import StyleBox from '../Theme/StyleBox';
import AuthContext from '../context/AuthContext';
import Header from '../components/Header';

function UserDisplayComplaints() {
    const [details,setDetails]=useState([])
    const {user} = useContext(AuthContext)
    

useEffect(()=>{
    displayFile()
},[user.username])
let displayFile=async() => {
  let response = await fetch (`http://127.0.0.1:8000/${user.username}`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      //'Authorization':'Bearer ' + //String(authTokens.access)
    }
  })
  let data=await response.json()
  setDetails(data)
}

  return (
    <div>
      <Header/>
        {/* {details.map((output,id)=>( */}

          <Container maxWidth='md' /*key={id}*/ sx={{padding:'20px'}} >
            <StyleBox>
                <Typography variant='h5' align='center' color='primary'>{details.typeofcrime}</Typography>
                <Typography variant='h6' align='right'>{details.created}</Typography>
                <Typography variant='h6' >User:{details.accuser}</Typography>
                <Typography variant='h6'>Date:{details.datehappened}</Typography>
                <Typography variant='h6'>Time:{details.timehappened}</Typography>
                <Typography variant='h6'>Victim:{details.victim}</Typography>
                <Typography variant='h6'>Suspect:{details.suspect}</Typography>
                <Typography variant='h6'>Scene:{details.crimestory}</Typography>
                <Typography variant='h6'>Status:{ details.status? 'Success' : 'Pending'  }</Typography>
                </StyleBox>
          </Container>
          
          
        {/* ))} */}
    </div>
  )
}

export default UserDisplayComplaints
