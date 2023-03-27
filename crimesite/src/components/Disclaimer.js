     import React ,{useState} from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import { Link } from 'react-router-dom'
import Checkbox from '@mui/material/Checkbox';



 
 function Disclaimer() {
  const[check1,setCheck1]=useState(false)
  const[check2,setCheck2]=useState(false)

   
 
 return (
     <div>  
     
        <Container maxWidth='lg'>
        <Box sx={{border:'solid 1px black', padding:'40px',borderRadius:'20px',
             backgroundColor:'rgb(255,255,255,0.5)' }} >


            <Typography variant='h5'  align='center' color='primary'>
                Prior to filling a complaint with this portal ,we would request you to read the below information regarding terms and 
                conditions . 
            </Typography>
            <br/>
            <Typography variant='h6'>
            <Checkbox name="agree1" checked={check1}  
                onClick ={()=> !check1?setCheck1(true):setCheck1(false)} onChange={(e)=>setCheck1(e.target.checked)}/>
              The information I have provided on this form is correct to the best of my knowledge.I acknowledge that providing false information
              would make me liable to penal actions under Indian Laws .  
            </Typography> <br/><br/>

            <Typography variant='h6'>
            <Checkbox name="agree2" checked={check2}  onChange={(e)=>setCheck2(e.target.checked)}
                onClick={()=> !check2?setCheck2(true):setCheck2(false)} />
              I understand that actions on the complaints reported on this portal shall be taken by concerned authorization as per
              Indian Laws.
            </Typography>

            <Stack alignItems='flex-end' >
            <Button variant='contained'  disabled={!check1 || !check2} component={Link} to='/complaintpage'  >
            
                      I agree</Button>
            </Stack>
            </Box>
            </Container>
            <br/><br/>
     </div>
   )
 }
 
 export default Disclaimer