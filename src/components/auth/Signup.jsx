import {
  Box,
  Button,
  TextField,
  Typography,
  Grid,
} from '@mui/material';
import { useState } from 'react';
import * as PropTypes from 'prop-types';

const Signup = ({ switchMode, onClose }) => {
  const [signupForm, setSignupForm] = useState({
    companyName: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactPerson: '',
    phone: '',
  });

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    console.log('Signup submitted:', signupForm);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignupForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <Box component="form" onSubmit={handleSignupSubmit} sx={{ mt: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="companyName"
            label="Company Name"
            fullWidth
            required
            value={signupForm.companyName}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="email"
            label="Business Email"
            type="email"
            fullWidth
            required
            value={signupForm.email}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            required
            value={signupForm.password}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="confirmPassword"
            label="Confirm Password"
            type="password"
            fullWidth
            required
            value={signupForm.confirmPassword}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="contactPerson"
            label="Contact Person"
            fullWidth
            required
            value={signupForm.contactPerson}
            onChange={handleInputChange}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            name="phone"
            label="Phone Number"
            fullWidth
            required
            value={signupForm.phone}
            onChange={handleInputChange}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
      >
        Sign Up
      </Button>
      <Typography align="center" variant="body2">
        Already have an account?{' '}
        <Button color="primary" onClick={() => switchMode('login')}>
          Login here
        </Button>
      </Typography>
    </Box>
  );
};

Signup.propTypes = {
  switchMode: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Signup;