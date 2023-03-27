   import { Box, FormControlLabel, FormLabel, TextField, Typography,Button} from '@mui/material'
import { Container, Stack } from '@mui/system'
import React,{useState} from 'react'
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import MenuItem from '@mui/material/MenuItem';





function PersonalDetails() {
    const[name,setName]=useState('')
    const[dob,setDob]=useState('')
    const[gender,setGender]=useState('')
    const[email,setEmail]=useState('')
    const[address,setAddress]=useState('')
    const[mobile,setMobile]=useState('')
    const[district,setDistrict]=useState('')
    const[aadhar,setAadhar]=useState('')
    const[career,setCareer]=useState('')

    const tamilNaduDistricts = [
        "Ariyalur",
        "Chennai",
        "Coimbatore",
        "Cuddalore",
        "Dharmapuri",
        "Dindigul",
        "Erode",
        "Kanchipuram",
        "Kanyakumari",
        "Karur",
        "Krishnagiri",
        "Madurai",
        "Nagapattinam",
        "Namakkal",
        "Nilgiris",
        "Perambalur",
        "Pudukkottai",
        "Ramanathapuram",
        "Salem",
        "Sivaganga",
        "Thanjavur",
        "Theni",
        "Thiruvallur",
        "Thiruvarur",
        "Thoothukudi",
        "Tiruchirappalli",
        "Tirunelveli",
        "Tirupathur",
        "Tiruppur",
        "Tiruvannamalai",
        "Vellore",
        "Viluppuram",
        "Virudhunagar"
      ];
      const renderList=tamilNaduDistricts.map((item,index)=>
      <MenuItem key={index} value={item}
      >{item}</MenuItem>
      
      )

  return (
    <div><br/>
    
    <Container maxWidth='sm' >
    <Box  sx={{border:'solid 1px black', padding:'40px',borderRadius:'20px',
             backgroundColor:'rgb(255,255,255,0.5)' }}>
    <Typography variant='h5'  >Personal Details:</Typography><br/>
        
        <form  >
        <Stack spacing={3} direction='column' alignItems='flex-start'>
            <TextField required type='text' label='Your Name' name='name' variant='standard'  
                        size='small' value={name}  onChange={(e)=>setName(e.target.value)}   
                            fullWidth
                        />
            
            <TextField required type='date'   name='dob' variant='standard' width='80px'  size='small'  
                fullWidth
                value={dob} onChange={(e)=>setDob(e.target.value)}
            />
            
            <RadioGroup required name='gender' value={gender}  onChange={(e)=>setGender(e.target.value)} >
                <pre>
                <FormLabel><b>Gender: </b></FormLabel><FormControlLabel  value="male" control={<Radio size='small' />} label="Male"/><FormControlLabel value="female" control={<Radio size='small'/>} label="Female"/>
                </pre>
                </RadioGroup>
            
            <TextField required type='email' label='E-mail address' name='email' 
                variant='standard' width='80px' size='small' fullWidth value={email} onChange={(e)=>setEmail(e.target.value)} />
            
            <TextField required type='text' label='Current Address' name='address' 
                variant='standard' width='80px' size='small' fullWidth value={address}  onChange={(e)=>setAddress(e.target.value)}/>
            
            <TextField required  type='tel' label='Mobile No.' name='mobile' 
                    variant='standard' width='80px' size='small'fullWidth value={mobile} onChange={(e)=>setMobile(e.target.value)} />
            
            
            <TextField required select  type='text' label="District"  variant='standard' name='district' 
                        value={district} onChange={(e)=>setDistrict(e.target.value)} fullWidth >
            {renderList}
            </TextField>

            <TextField required type='tel' label='Aadhar Card No.' name='aadhar' variant='standard' width='80px' size='small'
                    fullWidth value={aadhar} onChange={(e)=>setAadhar(e.target.value)}
            />

            <TextField required type='text' label="Career" select  variant='standard'    name='career' 
                fullWidth  value={career} onChange={(e)=>setCareer(e.target.value)} >
                <MenuItem value='student'  >Student</MenuItem>
                <MenuItem value='govt job'  >Government Job</MenuItem>
                <MenuItem value='private job' >Private Job</MenuItem>
                <MenuItem value='self employed' >Self employed</MenuItem>
            </TextField>
            
            <Button type='submit' variant='contained'>Register</Button>
        </Stack>
        

        </form>
        
        </Box>
    </Container>
    
    </div>
  )
}

export default PersonalDetails