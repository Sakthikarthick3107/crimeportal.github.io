import { Box } from '@mui/material';


const FeedBox = (props) => (
  <Box
  sx={{border:'solid 1px black', padding:'0px',borderRadius:'5px',
             backgroundColor:'rgb(0,0,0,0.8)' }}
  >
    {props.children}
  </Box>
);
 export default FeedBox