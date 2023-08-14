import React from 'react';
import style from './Form.module.css';
import logo from '../../assets/Rick-And-Morty-Logo.png';
import { useState } from 'react';
import validation from '../Validation/Validation';
import { FormControl, Button, TextField } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import EmailIcon from '@mui/icons-material/Email';
import KeyIcon from '@mui/icons-material/Key';

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
    <div className={style.container}>
      <div className={style.formContainer}>
      <img className={style.logo} src={logo} alt="ramlogo"></img>
        <form onSubmit={handleSubmit} className={style.form}>
          <FormControl>
            <TextField
              placeholder="rick@mail.com"
              margin="dense"
              label="Email"
              type="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              error={!!errors.email}
              helperText={errors.email ? errors.email : ' '}
              InputProps={{
                startAdornment: <EmailIcon sx={{ mr: 1 }} />,
              }}
            />
          </FormControl>

          <FormControl>
            <TextField
              placeholder="Morty123"
              margin="dense"
              label="Password"
              type="password"
              name="password"
              value={userData.password}
              onChange={handleChange}
              error={!!errors.password}
              helperText={errors.password ? errors.password : ' '}
              InputProps={{
                startAdornment: <KeyIcon sx={{ mr: 1 }} />,
              }}
            />
          </FormControl>

          <Button type="submit" variant="contained" startIcon={<LoginIcon />}>
            Log in
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Form;
