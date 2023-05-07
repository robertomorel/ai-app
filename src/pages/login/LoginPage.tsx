import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useNavigate } from 'react-router-dom';
import {
  Container,
  CssBaseline,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Link,
  Box,
  Grid,
  InputAdornment,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { AccountCircle, Lock } from '@material-ui/icons';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useAuth } from '../../hooks/useAuth';

import gymBackground from '../../img/background_.jpg';

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      height: '100vh',
      background: `url(${gymBackground}) no-repeat center center fixed`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      display: 'flex',
      alignItems: 'center',
    },
    paper: {
      margin: theme.spacing(8, 4),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(1),
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      padding: '24px',
      borderRadius: '8px',
      [theme.breakpoints.up('md')]: {
        minWidth: '400px' /* increase the maximum width */,
        margin: '0 auto' /* center the form horizontally */,
      },
    },
    submit: {
      margin: theme.spacing(3, 0, 2),
    },
    icon: {
      marginRight: theme.spacing(1),
    },
  }),
);

export default function LoginPage() {
  const classes = useStyles();

  const { login, password: authPassword, username: authUserName, setRememberMe, rememberMe, isAuthenticated } = useAuth();

  const [username, setUsername] = React.useState(rememberMe ? authUserName : '');
  const [password, setPassword] = React.useState(rememberMe ? authPassword : '');
  const navigate = useNavigate();

  const handleLogin = () => {
    login(username, password);
    navigate('/dashboard');
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <Box className={classes.root}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5" style={{ color: '#fff', textShadow: '1px 1px 2px rgba(0,0,0,0.5)' }}>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container alignItems="flex-end">
              <Grid item xs={11}>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={username}
                  onChange={handleUsernameChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <AccountCircle />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container alignItems="flex-end">
              <Grid item xs={11}>
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
                  value={password}
                  onChange={handlePasswordChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <LockOutlinedIcon />
                      </InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" checked={rememberMe} />}
              label="Remember me"
              onClick={() => setRememberMe(!rememberMe)}
            />
            <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit} onClick={handleLogin}>
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </Box>
  );
}
