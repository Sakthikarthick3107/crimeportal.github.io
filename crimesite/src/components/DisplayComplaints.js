import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { Container,Box } from '@mui/system';
import { Typography } from '@mui/material';

function DisplayComplaints() {
    const [details,setDetails]=useState([])

useEffect(()=>{
    let data;
    axios.get('http://localhost:8000')
    .then(res=>{
        data=res.data;
        setDetails(data)
    })
    .catch(err=>{})
})

  return (
    <div>
        {details.map((output,id)=>(

          <Container maxWidth='md' key={id} sx={{padding:'20px'}} >
            <Box sx={{border:'solid 1px black', padding:'40px',borderRadius:'20px',
             backgroundColor:'rgb(255,255,255,0.5)' }} >
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