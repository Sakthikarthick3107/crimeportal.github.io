import React,{useEffect, useState} from 'react'

import { Container,Box } from '@mui/system';
import { Typography } from '@mui/material';
import StyleBox from '../Theme/StyleBox';


function DisplayComplaints() {
    const [details,setDetails]=useState([])
    

useEffect(()=>{
    displayFile()
},[])
let displayFile=async() => {
  let response = await fetch ('http://127.0.0.1:8000/',{
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
        {details.map((output,id)=>(

          <Container maxWidth='md' key={id} sx={{padding:'20px'}} >
            <StyleBox>
                <Typography variant='h5' align='center' color='primary'>{output.typeofcrime}</Typography>
                <Typography variant='h6' align='right'>{output.created}</Typography>
                <Typography variant='h6' >User:{output.user.username}</Typography>
                <Typography variant='h6'>Date:{output.datehappened}</Typography>
                <Typography variant='h6'>Time:{output.timehappened}</Typography>
                <Typography variant='h6'>Victim:{output.victim}</Typography>
                <Typography variant='h6'>Suspect:{output.suspect}</Typography>
                <Typography variant='h6'>Scene:{output.crimestory}</Typography>
                </StyleBox>
          </Container>
          
          
        ))}
    </div>
  )
}

export default DisplayComplaints
