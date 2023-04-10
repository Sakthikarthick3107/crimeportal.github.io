import React,{useContext} from 'react'
import Logo from '../images/logo.png'
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AuthContext from '../context/AuthContext';
import { AppBar, Toolbar ,Box, Button, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import AdminSideBar from './AdminSideBar';
function AdminHeader() {
    let {user , logoutUser}=useContext(AuthContext)
  return (
    <div>
      
        <AppBar color='transparent' sx={{boxShadow:'0'}} >
                <Toolbar>
                  <AdminSideBar/>
                  
                    <Box sx={{flexGrow:1}}></Box>
                    {user&& <Typography variant='h6'>Hello Admin  {user.username} </Typography>}
                            <Button component={Link} to='/' variant='contained' onClick={logoutUser} >Logout <AdminPanelSettingsIcon/> </Button>
                </Toolbar>
            </AppBar> 
        <center>
        
        <div style={{
                height:'300px'}}>
        <img  draggable={false} onDragStart={false} src={Logo} media="(max-width: 608px)" sizes="600px" />
        </div>
        </center>
    </div>
  )
}

export default AdminHeader