 import React,{useContext} from 'react'
import { Stack } from '@mui/system';
import { SideBar } from './SideBar';
import { AppBar, Toolbar ,Box, Button, Typography, IconButton} from '@mui/material'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';


const MenuBar=()=> {
  let {user , logoutUser}=useContext(AuthContext)
  return (
    <div>
        <AppBar   sx={{boxShadow:'0',backgroundColor:'rgb(0,0,0,0.8)'}}  position='absolute' > 
                <Toolbar >
                <SideBar/>
                    <Box sx={{flexGrow:1}}></Box>
                    {user&&<div> <Typography variant='p'> {user.username} </Typography>
                      <IconButton color='primary'component={Link} to='/personaldetails' ><AccountCircleRoundedIcon  
                         fontSize='medium' />  </IconButton> </div>       }
                        
                    &nbsp; &nbsp; &nbsp;
                          {user?(
                            <Button variant='contained' onClick={logoutUser} component={Link} to='/' >Logout</Button>
                          ) : (
                            <Stack spacing={2} direction='row'>
                            <Button component={Link} to='/registerpage' variant='outlined' >SignUp</Button>
                            <Button component={Link} to='/loginpage' variant='contained' >Login</Button>
                            </Stack>
                          )
                        }
                        
                    
                </Toolbar>
            </AppBar> 
    </div>
  )
}

export default MenuBar