  import { Container, Typography } from '@mui/material'
import React, { useState ,useEffect} from 'react'
import AdminHeader from '../AdminComponent/AdminHeader'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function AdminHome() {
  const [users,setUsers] = useState([])

  useEffect(()=>{
    displayUsers()
},[])
let displayUsers=async() => {
  let response = await fetch (`http://127.0.0.1:8000/peopleusers/details/`,{
    method:'GET',
    headers:{
      'Content-Type':'application/json',
      //'Authorization':'Bearer ' + //String(authTokens.access)
    }
  })
  let data=await response.json()
  setUsers(data)
}

  return (
    <div>
        <AdminHeader/>
        <Container maxWidth='lg'>
         <Typography variant='h6' align='center' color='secondary' >Welcome to the admin panel! Here you can only access all the users information and can manage the details,posts.</Typography>
         </Container>
        <Typography variant='h5' align='center' color='primary'>User Table</Typography><br/>
        <Container maxWidth='lg'>
        <TableContainer  >
      <Table sx={{ minWidth: 700 }} size="small" >
        <TableHead  style={{backgroundColor:'#d50000'}}>
          <TableRow>
            <TableCell>Users</TableCell>
            <TableCell align="right">DOB</TableCell>
            <TableCell align="right">Gender</TableCell>
            <TableCell align="right">Mobile</TableCell>
            <TableCell align="right">District</TableCell>
            <TableCell align="right">Aadhar</TableCell>
            <TableCell align="right">Career</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((output,id) => (
            <TableRow
              key={id} 
              sx={{ '&:last-child td, &:last-child th': { border: 0 },backgroundColor:'rgb(0,0,0,0.8)',color:'white' }}
            >
              <TableCell component="th" scope="row">
                {output.name}
              </TableCell>
              <TableCell align="right">{output.dob}</TableCell>
              <TableCell align="right">{output.gender}</TableCell>
              <TableCell align="right">{output.mobile}</TableCell>
              <TableCell align="right">{output.district}</TableCell>
              <TableCell align="right">{output.aadhar}</TableCell>
              <TableCell align="right">{output.career}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Container>
    </div>
  )
}

export default  AdminHome