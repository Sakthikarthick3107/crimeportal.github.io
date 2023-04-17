import React from 'react'
import Logo from '../images/logo.png'
import MenuBar from './MenuBar'
import { Container, Typography } from '@mui/material'



function Header() {
  return (
    <>
        
        <MenuBar/><br/><br/><br/><br/>
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
      <br/><br/>
      </Container><hr/>
    </ >
  )
}

export default Header