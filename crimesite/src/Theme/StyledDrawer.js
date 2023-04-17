import { Box } from '@mui/material';


const StyledDrawer = (props) => (
  <Box
  sx={{ backgroundColor:'rgb(0,0,0,0.8)',
                        width:'200px', height:'100%'}}
  >
    {props.children}
  </Box>
);
 export default StyledDrawer