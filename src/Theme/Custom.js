//import { createMuiTheme } from "material-ui/styles"; 
//import { createMuiTheme} from '@material-ui/core';
import {createTheme} from  '@mui/material/styles'
const Custom = createTheme({
    shadows: ["none"],
    type: 'light',
    typography: {
        allVariants:{
            color: 'white',
        },
        Link:{
            textDecoration:'none'
        }
    },
    
    palette:{
        primary:{
            main:'#d50000'
        }
    }
    
})

export default Custom