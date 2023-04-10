import React,{useEffect, useState,useContext} from 'react'
import axios from 'axios'
import { Container,Box } from '@mui/system';
import { Typography } from '@mui/material';
import AuthContext from '../context/AuthContext';

function DisplayComplaints() {
    const [details,setDetails]=useState([])
    let {authTokens}=useContext(AuthContext)

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
            <Box sx={{border:'solid 1px black', padding:'40px',borderRadius:'20px',
             backgroundColor:'rgb(0,0,0,0.2)' }} >
                <Typography variant='h5' align='center' color='primary'>{output.typeofcrime}</Typography>
                {/* <Typography variant='h6' align='right'>{output.created}</Typography> */}
                <Typography variant='h6'>Date:{output.datehappened}</Typography>
                <Typography variant='h6'>Time:{output.timehappened}</Typography>
                <Typography variant='h6'>Victim:{output.victim}</Typography>
                <Typography variant='h6'>Suspect:{output.suspect}</Typography>
                <Typography variant='h6'>Scene:{output.crimestory}</Typography>
             </Box>
          </Container>
          
          
        ))}
    </div>
  )
}

export default DisplayComplaints
{/* <tr key={id}>
            <td>{id}</td>
            <td>{output.typeofcrime}</td>
            <td>{output.victim} </td>
            <td>{output.suspect} </td>
            </tr> */}