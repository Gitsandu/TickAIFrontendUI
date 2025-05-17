import {
  Box,
  Button,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import { useState } from 'react';
import * as PropTypes from 'prop-types';
import { Google as GoogleIcon } from '@mui/icons-material';

const Login = ({ switchMode, onClose }) => {
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', loginForm);
  };

  const handleGoogleLogin = () => {
    console.log('Google login clicked');
  };

  return (
    <Box component="form" onSubmit={handleLoginSubmit} sx={{ mt: 2 }}>
      <TextField
        margin="dense"
        label="Email Address"
        type="email"
        fullWidth
        required
        value={loginForm.email}
        onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
      />
      <TextField
        margin="dense"
        label="Password"
        type="password"
        fullWidth
        required
        value={loginForm.password}
        onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
      />
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign In
      </Button>
      <Divider sx={{ my: 2 }}>
        <Typography variant="body2" color="text.secondary">
          OR
        </Typography>
      </Divider>
      <Button
        fullWidth
        variant="outlined"
        startIcon={<GoogleIcon />}
        onClick={handleGoogleLogin}
        sx={{ mb: 2 }}
      >
        Continue with Google
      </Button>
      <Typography align="center" variant="body2">
        Don't have an account?{' '}
        <Button color="primary" onClick={() => switchMode('signup')}>
          Sign up here
        </Button>
      </Typography>
    </Box>
  );
};

Login.propTypes = {
  switchMode: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Login;