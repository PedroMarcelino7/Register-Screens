import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import UseAuth from '../../hooks/useAuth';
import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import Error from '../../components/Error/Error';

export default function Forgot() {
    // const [email, setEmail] = useState("")
    // const [password, setPassword] = useState("")
    // const [error, setError] = useState("")

    // const { signIn } = UseAuth()

    // const handleLogin = (e) => {
    //     e.preventDefault();

    //     if (!email || !password) {
    //         setError("Preencha todos os campos");
    //         return;
    //     }

    //     const res = signIn(email, password);

    //     if (res) {
    //         setError(res);
    //         return;
    //     }

    //     window.location.href = 'https://pedromarcelino7.github.io/Pokedex/';
    // }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>

                <Typography component="h1" variant="h5">
                    Change password
                </Typography>

                {/* {error !== '' && <Error error={error} />} */}

                <Box component="form" noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                    // value={email}
                    // onChange={e => [setEmail(e.target.value), setError("")]}
                    />

                    {/* <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    /> */}

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    // onClick={handleLogin}
                    >
                        Send e-mail request
                    </Button>
                    <Grid container justifyContent='space-between'>
                        <Grid item>
                            <NavLink to='/Register-Screens/login' >
                                <Link>
                                    Already have an account? Sign in
                                </Link>
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>

            {/* <Copyright sx={{ mt: 8, mb: 4 }} /> */}
        </Container >
    );
}
