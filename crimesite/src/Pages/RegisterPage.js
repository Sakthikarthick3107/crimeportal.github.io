import React, { useState } from 'react';
import Header from '../components/Header';
import StyleBox from '../Theme/StyleBox';
import { ButtoButton, n, Container, Stack, TextField, Typography, Button } from '@mui/material';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://127.0.0.1:8000/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('User registered successfully!', data);
      })
      .catch((error) => {
        console.error('Error registering user:', error);
      });
  };

  return (
    <>
    <Header/>
    
        <Container maxWidth='sm'>
        <StyleBox>
            <Typography variant='h5' color='primary'>Register</Typography>

    <form onSubmit={handleSubmit}>
      
        <Stack spacing={3} direction='column' alignItems='flex-start'>
        <TextField variant='standard'fullWidth label='Username'
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />
      

        <TextField variant='standard'fullWidth label='Email'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
      
 
        <TextField variant='standard'fullWidth label='Create Password'
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
    
      <Button type="submit" variant='contained'>Register</Button>
      </Stack>
    </form>
    </StyleBox>
    </Container>
    
    </>
  );
};

export default RegisterPage;