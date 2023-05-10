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



export const SideBar = () => {
    const [isDrawerOpen,setIsDrawerOpen]=useState(false)

  return (
    <>
        <br/>
        <IconButton edge='start'  size='large'  onClick={()=>setIsDrawerOpen(true)}>
            <MenuIcon   />
        </IconButton>
        <Drawer anchor='left' open={isDrawerOpen} variant='permanent' onClose={()=>setIsDrawerOpen(false)} 
            sx={{flexGrow:1}}  >
            
            <StyledDrawer>
            <Stack direction='column' alignItems='flex-end'>
            <IconButton edge='end'   sx={{marginRight:'5px',color:'white'}}
            onClick={()=>setIsDrawerOpen(false)}><ArrowBackIosIcon/> </IconButton>
            </Stack>

                <List >
                    
                    <ListItem  >
                        
                         <ListItemButton component={NavLink} to='/' >
                         <CottageOutlinedIcon />    
                            <ListItemText primary="Home" />
                        </ListItemButton>
                        
                    </ListItem>
                    
                    <ListItem >
                        <ListItemButton  >
                            <InfoIcon/>
                            <ListItemText primary="About" />
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem >
                        <ListItemButton component={NavLink} to='/newsfeed'>
                            
                            <FeedIcon/>
                            <ListItemText primary="NewsFeed" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem >
                        <ListItemButton  component={NavLink} to='/mycomplaints' >
                            <FileCopyIcon/>
                            <ListItemText primary="My Complaints" />
                        </ListItemButton>
                    </ListItem>
                    
                    <ListItem >
                        <ListItemButton  component={NavLink} to='/administrator/login'>
                            
                            <AdminPanelSettingsIcon/>
                            <ListItemText primary="AdminLogin"  />
                        </ListItemButton>
                    </ListItem>
                </List>

                </StyledDrawer>
        </Drawer>
    </>
  )
}
