import React,{useState} from 'react'
import {Drawer,Box,IconButton,List,ListItemButton,ListItemText,ListItem} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import CottageOutlinedIcon from '@mui/icons-material/CottageOutlined';
import InfoIcon from '@mui/icons-material/Info';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import FeedIcon from '@mui/icons-material/Feed';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import { Stack } from '@mui/system';
import {NavLink} from 'react-router-dom'
import StyledDrawer from '../Theme/StyledDrawer';

export const AdminSideBar = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)

  return (
    <>
        <br/>
        <IconButton edge='start'  size='large'  onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon   />
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} sx={{color:'transparent'}}
        variant='permanent'
            >
            
            <StyledDrawer>
            <Stack direction='column' alignItems='flex-end'>
            <IconButton edge='end'   sx={{marginRight:'5px',color:'white'}}
            onClick={()=>setIsDrawerOpen(false)}><ArrowBackIosIcon/> </IconButton>
            </Stack>

                <List >
                    
                    <ListItem  >
                        
                         <ListItemButton  >
                         <FileCopyIcon />    
                            <ListItemText primary=" Complaints" />
                        </ListItemButton>
                        
                    </ListItem>
                    
                    <ListItem >
                        <ListItemButton component={NavLink} to='/administrator/createpost' >
                            <FeedIcon/>
                            <ListItemText primary="Create POST" />
                        </ListItemButton>
                    </ListItem>
                     <ListItem >
                        <ListItemButton>
                            
                            <FeedIcon/>
                            <ListItemText primary="Edit POST" />
                        </ListItemButton>
                    </ListItem>
                    {/*<ListItem >
                        <ListItemButton component={NavLink} to='/mycomplaints' >
                            <FileCopyIcon/>
                            <ListItemText primary="MyComplaints" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton  component={NavLink} to='/adminlogin'>
                            
                            <AdminPanelSettingsIcon/>
                            <ListItemText primary="AdminLogin"  />
                        </ListItemButton>
                    </ListItem> */}
                </List>

                </StyledDrawer>
        </Drawer>
    </>
  )
}

export default AdminSideBar
