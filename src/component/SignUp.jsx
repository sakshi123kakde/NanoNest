import React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import SignUp from '../assets/SignUp.png';
import Divider from '@mui/material/Divider';
import { GoogleIcon, FacebookIcon, SitemarkIcon } from './CustomIcons';
import { Link as RouterLink } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        NanoNest
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUpSide() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: `url(${SignUp})`,
          backgroundRepeat: 'no-repeat',
          backgroundColor: (theme) =>
            theme.palette.mode === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid
        item
        xs={12}
        sm={8}
        md={5}
        component={Paper}
        elevation={6}
        square
      >
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, backgroundColor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="firstName"
              label="First Name"
              name="firstName"
              autoComplete="fname"
              autoFocus
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              sx={{  
                '& .MuiOutlinedInput-root': {  
                  '&:hover fieldset': {  
                    borderColor: '#F9BC6E', // Border color on hover  
                  },  
                  '&.Mui-focused fieldset': {  
                    borderColor: '#F9BC6E', // Border color when focused  
                  },  
                },  
              }}
            />
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2, backgroundColor: '#F9BC6E',  }}
            >
              Sign Up
            </Button>
            <Grid container>
              <Grid item xs>
              <RouterLink to="/signIn" variant="body2">
                 {"Don't have an account? Sign In"}
              </RouterLink>

              </Grid>
            </Grid>
            <Divider>or</Divider>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Google')}
              startIcon={<GoogleIcon />}
            >
              Sign in with Google
            </Button>
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              onClick={() => alert('Sign in with Facebook')}
              startIcon={<FacebookIcon />}
            >
              Sign in with Facebook
            </Button>
          </Box>

            <Box mt={5}>
              <Copyright />
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}
