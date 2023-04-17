import { Box } from '@mui/material';


const StyleBox = (props) => (
  <Box
  sx={{border:'solid 1px black', padding:'40px',borderRadius:'5px',
             backgroundColor:'rgb(0,0,0,0.8)' }}
  >
    {props.children}
  </Box>
);
 export default StyleBox