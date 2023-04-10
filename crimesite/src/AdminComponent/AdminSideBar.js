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
import {Link} from 'react-router-dom'

export const AdminSideBar = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)

  return (
    <>
        <br/>
        <IconButton edge='start'  size='large'  onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon   />
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} onClose={()=>setIsDrawerOpen(false)} sx={{color:'transparent'}}
            >
            
            <Box  textAlign='center' role='presentation'  sx={{ backgroundColor:'rgb(0,0,0,0.8)',
                        width:'200px', height:'100%' }} >
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
                        <ListItemButton component={Link} to='/administrator/createpost' >
                            <FeedIcon/>
                            <ListItemText primary="Create POST" />
                        </ListItemButton>
                    </ListItem>
                    {/* <ListItem >
                        <ListItemButton>
                            
                            <FeedIcon/>
                            <ListItemText primary="NewsFeed" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton component={Link} to='/mycomplaints' >
                            <FileCopyIcon/>
                            <ListItemText primary="MyComplaints" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton  component={Link} to='/adminlogin'>
                            
                            <AdminPanelSettingsIcon/>
                            <ListItemText primary="AdminLogin"  />
                        </ListItemButton>
                    </ListItem> */}
                </List>

            </Box> 
        </Drawer>
    </>
  )
}

export default AdminSideBar
