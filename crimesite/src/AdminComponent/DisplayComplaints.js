  import React,{useContext, useEffect, useState} from 'react'

import { Container,Box } from '@mui/system';
import { Button, Typography } from '@mui/material';
import StyleBox from '../Theme/StyleBox';
import AuthContext from '../context/AuthContext';
import axios from 'axios'
import AdminHeader from './AdminHeader';

const DisplayComplaints= (props) => {
    const [details,setDetails]=useState([])
    const [update,setUpdate] = useState(props.initialValue)
    const {user} = useContext(AuthContext)

useEffect(()=>{
    displayFile()
},[])
let displayFile=async() => {
  let response = await fetch (`http://127.0.0.1:8000`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      //'Authorization':'Bearer ' + //String(authTokens.access)
    }
  })
  let data=await response.json()
  setDetails(data)
}

const handleUpdate =async (e) =>{
  const newVal = !props.initialValue
  try{
    const response = await axios.put(`http://127.0.0.1:8000/status/${props.id}/update`,{status : newVal})
    setUpdate(newVal)
    console.log(response.data)
  }catch(e){
    console.error(e)
  }
  
  
}


  return (
    <div>
      <AdminHeader/>
        {details.map((output,id)=>(

          <Container maxWidth='md' key={id} sx={{padding:'20px'}} >
            <StyleBox>
                <Typography variant='h5' align='center' color='primary'>{output.typeofcrime}</Typography>
                <Typography variant='h6' align='right'>{output.created}</Typography>
                <Typography variant='h6' >Case Id:{output.id}</Typography>
                <Typography variant='h6' >User:{output.accuser}</Typography>
                <Typography variant='h6'>Date:{output.datehappened}</Typography>
                <Typography variant='h6'>Time:{output.timehappened}</Typography>
                <Typography variant='h6'>Victim:{output.victim}</Typography>
                <Typography variant='h6'>Suspect:{output.suspect}</Typography>
                <Typography variant='h6'>Scene:{output.crimestory}</Typography>
                <Typography variant='h6'>Status:{ update?'Completed':'Pending' }</Typography>
                <Button variant='contained' onClick={handleUpdate}>Update Status</Button>
                </StyleBox>
          </Container>
          
          
        ))}
    </div>
  )
}

export default DisplayComplaints
