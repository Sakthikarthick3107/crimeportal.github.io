
import {createTheme} from  '@mui/material/styles'
const Custom = createTheme({
    shadows: ['none'],
    type: 'light',
    typography: {
        allVariants:{
            color: 'white',
        },
    },
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
                    paddingLeft:'35px',
                    "&.active":{
                        background:'#d50000'
                    },
                },
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    padding:'2px',
                }
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    color:'black',
                    borderBottom:'black',
                    fontSize:'18px',
                    ":hover":{
                        background:'#d50000'
                    },
                }
            }
        }
    },
})
Custom.shadows[1]=Custom.shadows[0]
Custom.shadows[4]=Custom.shadows[0]
Custom.shadows[8]=Custom.shadows[0]
Custom.shadows[16]=Custom.shadows[0]
Custom.shadows[24]=Custom.shadows[0]

export default Custom

