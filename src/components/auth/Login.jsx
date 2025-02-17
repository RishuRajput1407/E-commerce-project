import React, { useState, useEffect } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Container,
  Paper,
  Alert,
  IconButton,
  InputAdornment,
  Stack
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    // Check for email from signup
    const lastSignupEmail = sessionStorage.getItem('lastSignupEmail');
    if (lastSignupEmail) {
      setFormData(prev => ({ ...prev, email: lastSignupEmail }));
      sessionStorage.removeItem('lastSignupEmail'); // Clear it after use
    }
  }, []);

  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Get stored user data
    const storedUserData = localStorage.getItem('userData');
    if (!storedUserData) {
      setError('User not found. Please sign up first.');
      return;
    }

    const userData = JSON.parse(storedUserData);
    
    // Check credentials
    if (userData.email === formData.email && userData.password === formData.password) {
      // Login successful
      localStorage.setItem('isLoggedIn', 'true');
      navigate('/home'); // Navigate to home page instead of root
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper 
        elevation={3} 
        sx={{ 
          p: 4, 
          mt: 8, 
          display: 'flex', 
          flexDirection: 'column', 
          alignItems: 'center',
          background: 'linear-gradient(to bottom right, #ffffff, #f5f5f5)'
        }}
      >
        <Typography
          component="h1"
          variant="h4"
          sx={{
            mb: 3,
            fontWeight: 600,
            background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent'
          }}
        >
          Welcome Back
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1, width: '100%' }}>
          {error && (
            <Alert severity="error" sx={{ mb: 2, borderRadius: 2 }}>
              {error}
            </Alert>
          )}
          <Stack spacing={2}>
            <TextField
              required
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoFocus
              variant="outlined"
            />
            <TextField
              required
              fullWidth
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Stack>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ 
              mt: 4, 
              mb: 2,
              height: '48px',
              background: 'linear-gradient(45deg, #2196f3, #21cbf3)',
              '&:hover': {
                background: 'linear-gradient(45deg, #1976d2, #21cbf3)',
              }
            }}
          >
            Login
          </Button>
          <Typography variant="body2" align="center" sx={{ mt: 2 }}>
            Don't have an account?{' '}
            <Link 
              to="/signup"
              style={{ 
                color: '#2196f3',
                textDecoration: 'none',
                fontWeight: 500,
                '&:hover': {
                  textDecoration: 'underline'
                }
              }}
            >
              Sign up here
            </Link>
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default Login;
