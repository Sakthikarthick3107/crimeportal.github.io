 import React,{useContext} from 'react'
import { Stack } from '@mui/system';
import { SideBar } from './SideBar';
import { AppBar, Toolbar ,Box, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';


const MenuBar=()=> {
  let {user , logoutUser}=useContext(AuthContext)
  return (
    <div>
        <AppBar color='transparent' sx={{boxShadow:'0'}} >
                <Toolbar>
                <SideBar/>
                    <Box sx={{flexGrow:1}}></Box>
                    {user&& <Typography variant='h6'>Hello {user.username} </Typography>}
                        

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