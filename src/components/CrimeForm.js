import React,{useState} from 'react'
import { Container, Stack } from '@mui/system'
import { TextField, Typography,Button, MenuItem, Box} from '@mui/material'
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function CrimeForm() {
  const crimes=[
    {
      type:'ViolentCrime',
      description:'These crimes involve the use or threat of physical force against another person, and include homicide, assault, battery, and robbery.'
    },
    
    {
      type:'PropertyCrime',
      description:'These crimes involve the theft or destruction of property, and include burglary, theft, arson, and vandalism.'
    },

    {
      type:'WhiteCollarCrime',
      description:'These are non-violent crimes committed by individuals or organizations in a business or professional setting, and include fraud, embezzlement, and insider trading.'
    },

    {
      type:'DrugCrime',
      description:'These crimes involve the manufacturing, sale, distribution, or possession of illegal drugs, and include drug trafficking and drug possession.'
    },

    {
      type:'SexCrime',
      description:'These crimes involve sexual acts that are against the law, and include rape, sexual assault, and prostitution.'
    },
    {
      type:'CyberCrime',
      description:'These crimes involve the use of computers or the internet to commit illegal activities, such as hacking, identity theft, and online fraud.'
    }
  ]
  const renderCrime=crimes.map((crime)=>
      <MenuItem key={crime.type} value={crime.type} title={crime.description} 
      sx={{ background: "rgb(0,0,0,0.8)" }}>{crime.type}</MenuItem>
      
      )
    const [typeofcrime,setTypeOfCrime]=useState('')
    const [crimelocation,setCrimeLoaction]=useState('')
    const [timehappened,setTimeHappened]=useState('')
    const [datehappened,setDateHappened]=useState('')
    const [victim,setVictim]=useState('')
    const [suspect,setSuspect]=useState('')
    const [crimestory,setCrimeStory]=useState('')
    const [alert, openAlert] =useState(false);

    const display=(e)=>{
      console.log(typeofcrime,crimelocation,timehappened,datehappened,victim,suspect,crimestory)
      e.preventDefault()
      openAlert(true)
    }

  return (
    <div><br/><br/>
      
      <Container maxWidth='sm' >
    
    
    <Box sx={{border:'solid 1px black', padding:'40px',borderRadius:'20px',
             backgroundColor:'rgb(0,0,0,0.5)' }} >
        <form  >
        <Typography  variant='h5'  >Crime Information :</Typography><br/>
        <Stack spacing={3} direction='column' alignItems='flex-start'>
            <TextField required type='text' label='Type of crime' select  variant='standard' fullWidth name='typeofcrime'
                        value={typeofcrime} onChange={(e)=>setTypeOfCrime(e.target.value)}  >
            {renderCrime}
            </TextField>

            <TextField required type='text' label='Location of crime' value={crimelocation} onChange={(e)=>setCrimeLoaction(e.target.value)}
                    name='crimelocation'  variant='standard' fullWidth/>

            <TextField required type='time' label='When it was happened?' onChange={(e)=>setTimeHappened(e.target.value)}
                name='timehappened' value={timehappened} variant='standard' fullWidth/>

            <TextField required type='date' variant='standard' fullWidth 
                name='datehappened' value={datehappened} onChange={(e)=>setDateHappened(e.target.value)}
            />

            <TextField  type='text' label='Victim(if knows)' variant='standard' fullWidth  name='victim' value={victim}
                      onChange={(e)=>setVictim(e.target.value)} />

            <TextField type='text' label='Suspect(if knows)' variant='standard' fullWidth name='suspect' value={suspect}
                  onChange={(e)=>setSuspect(e.target.value)}
                     />

            <TextField type='text' required multiline label='Narrative of the crime...' name='crimestory' value={crimestory}
                  onChange={(e)=>setCrimeStory(e.target.value)}  fullWidth/>
            </Stack>
            <br/>
            <Stack alignItems='center'>
              <Button type='submit' variant='contained' onClick={display} 
                            >Submit</Button>
            </Stack>
      </form>
      </Box>
      </Container>

      <Dialog style={{color:'rgb(0,0,0)'}}
        open={alert}
        onClose={()=>openAlert(false)}
        
      >
        <DialogTitle color='primary'>
          Use Google's location service?
        </DialogTitle>
        <DialogContent>
          <DialogContentText >
            Are you sure to want to file this crime?Changes cannot be done in future! Submit whether all details are correct or 
            check again...
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>openAlert(false)}>File Case</Button>
          
        </DialogActions>
      </Dialog>
      
    </div>
  )
}

export default CrimeForm