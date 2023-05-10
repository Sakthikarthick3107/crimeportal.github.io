import React,{useState,useEffect} from 'react'
import Header from '../components/Header'
import { AppBar, Box, Button, Container, Stack, TextField, Toolbar, Typography } from '@mui/material'

import FeedBox from '../Theme/FeedBox'
import CommentIcon from '@mui/icons-material/Comment';

const NewsFeedPage = () => {
    const [details,setDetails]=useState([])
    const [message,setMessage]=useState('')
    // const [visible,setVisible]=useState(false)
  
    useEffect(()=>{
        displayFile()
    },[])

    let displayFile=async() => {
      let response = await fetch ('http://127.0.0.1:8000/api/posts/',{
        method:'GET',
        headers:{
          'Content-Type':'application/json',
        }
      })
      let data=await response.json()
      
      
      setDetails(data)
    }
    
  return (
    <>
        <Header/>
        {details.map((output,id)=>(
          
          
                <Container maxWidth='sm' key={id} sx={{padding:'20px'}}  >
                  
                <FeedBox>
                  <AppBar position='relative'>
                    <Toolbar>
                    <Typography variant='h5'>{output.title}</Typography> 
                    </Toolbar>
                  </AppBar>
                    <div  >
                        <div style={{display:'flex', alignItems:'center',justifyContent:'center'}}>
                            <img alt='hi' src={`http://127.0.0.1:8000${output.image}`}  style={{width:'400px',height:'250px'}} />
                        </div>
                        <hr/>
                        <div>
                            <Typography variant='h6'>{output.description} </Typography>
                        </div><hr/>
                        <div>
                          <Stack alignItems={'flex-end'}>
                          <Button /*onClick={()=>setVisible(!visible)} */> Comment  <CommentIcon fontSize='medium' /> </Button>
                          </Stack>
                          {/* <form>
                            {visible &&
                            <TextField type='text' multiline name='message' value={message} onChange={(e)=>setMessage(e.target.value)}
                            required variant='standard' label='Comment' hidden={true} fullWidth  />}
                          </form> */}
                        </div>
                    </div>
                    </FeedBox>
              </Container>


        ))}

    </>
  )
}

export default NewsFeedPage