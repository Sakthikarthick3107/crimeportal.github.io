import React,{useContext} from 'react'
import Logo from '../images/logo.png'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AuthContext from '../context/AuthContext';
import { AppBar, Toolbar ,Box, Button, Typography, Container} from '@mui/material'
import { Link } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
function AdminHeader() {
    let {adminUser , logoutUser}=useContext(AuthContext)
  return (
    <div>
      
        <AppBar sx={{boxShadow:'0',backgroundColor:'rgb(0,0,0,0.8)'}} position='absolute'  >
                <Toolbar>
                  <AdminSideBar/>
                  
                    <Box sx={{flexGrow:1}}></Box>
                    {adminUser&& <Typography variant='p'>{adminUser.username} </Typography>} &nbsp; &nbsp; &nbsp;
                            <Button component={Link} to='/' variant='contained' onClick={logoutUser} >Logout <AdminPanelSettingsIcon/> </Button>
                </Toolbar>
            </AppBar> 
            <br/><br/><br/><br/>
            <Container maxWidth='md'>
        <Typography variant='h1'  align='center'
                    color='black' fontSize='80px' fontFamily='Georgia'
        
        >
                Online Crime Reporting Portal</Typography>
        
        <Typography variant='h6'  textAlign='center'
                    color='black'  fontFamily='Georgia' letterSpacing={5}
        
        >
            Justice  for  crimes  against  humanity  must  have  no  limitations.</Typography>
            <Typography variant='h6'  textAlign='right' fontSize='15px' 
                    color='black'  fontFamily='Georgia' letterSpacing={2}
        
        >
            -Simon Wiesenthal</Typography>
      </Container><hr/>
      <br/><br/>
    </div>
  )
}

export default AdminHeader