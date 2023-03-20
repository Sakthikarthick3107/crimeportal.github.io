 import React from 'react'
import { Stack } from '@mui/system';
import { SideBar } from './SideBar';
import { AppBar, Toolbar ,Box, Button} from '@mui/material'

function MenuBar() {
  return (
    <div>
        <AppBar color='transparent' sx={{boxShadow:'0'}} >
                <Toolbar>
                <SideBar/>
                    <Box sx={{flexGrow:1}}></Box>
                    <Stack spacing={2} direction='row'>
                        <Button variant='outlined' >Signup</Button>
                        <Button variant='contained' >Login</Button>
                    </Stack>
                </Toolbar>
            </AppBar> 
    </div>
  )
}

export default MenuBar