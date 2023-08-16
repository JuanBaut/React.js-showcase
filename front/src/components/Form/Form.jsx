import React from 'react';
import style from './Form.module.css';
import logo from '../../assets/Rick-And-Morty-Logo.png';
import { useState } from 'react';
import validation from '../Validation/Validation';
import {
  Button,
  TextField,
  Box,
  Container,
  Paper,
  ButtonGroup,
} from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';
import CreateIcon from '@mui/icons-material/Create';

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
    console.log(handleSubmit);
  };

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
    console.log(handleChange);
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
      
        sx={{
          py: 3,
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
        component="form"
        autoComplete="off"
        noValidate
        onSubmit={handleSubmit}
      >
        <img className={style.logo} src={logo} alt="ramlogo"></img>
        <TextField
          required
          fullWidth
          placeholder="rick@mail.com"
          margin="dense"
          label="Email"
          type="email"
          name="email"
          value={userData.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email ? errors.email : ' '}
        />
        <TextField
          required
          fullWidth
          placeholder="Morty123"
          margin="dense"
          label="Password"
          type="password"
          name="password"
          value={userData.password}
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password ? errors.password : ' '}
        />
        <ButtonGroup>
          <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
            Log in
          </Button>
          <Button type="submit" variant="contained" startIcon={<CreateIcon />}>
            Sign In
          </Button>
        </ButtonGroup>
      </Box>
    </Container>
  );
};

export default Form;
