//import { createMuiTheme } from "material-ui/styles"; 
//import { createMuiTheme} from '@material-ui/core';
import {createTheme} from  '@mui/material/styles'
const Custom = createTheme({
    shadows: ['none'],
    type: 'light',
    // typography: {
    //     allVariants:{
    //         color: 'black',
    //     },
    // },
palette:{
        primary:{
            main:'#d50000'
        }
    }
    ,
    components:{
        MuiListItemButton:{
            styleOverrides:{
                root:{
                    color:'white',
                    margin:'0px'
                }
            }
        },
    },
})
Custom.shadows[1]=Custom.shadows[0]
Custom.shadows[4]=Custom.shadows[0]
Custom.shadows[8]=Custom.shadows[0]
Custom.shadows[16]=Custom.shadows[0]
Custom.shadows[24]=Custom.shadows[0]

export default Custom