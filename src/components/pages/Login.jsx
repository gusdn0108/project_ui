import { TextField } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Link } from '@mui/material';
import { Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { Avatar } from '@mui/material';
import { Box } from '@mui/material';
import Button from '@mui/material/Button';
// import ButtonGroup from '@mui/material/ButtonGroup';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid'

function Login() {
    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    ml: 12,
                    mr: 12,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 3, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <TextField
                    margin="normal"
                    label="Email Address"
                    required
                    fullWidth
                    name="email"
                    autoComplete="email"
                    autoFocus />
                <TextField
                    margin="normal"
                    label="password"
                    type="password"
                    required
                    fullWidth
                    name="password"
                    autoComplete="password" />
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="계정 기억하기" />
                <Button
                    type="submit"
                    fullWidth
                    variant='contained'
                    sx={{ mt: 3, mb: 3 }}
                >sign In</Button>
                <Grid container>
                    <Grid item xs>
                        <Link>비번 까먹음?</Link>
                    </Grid>
                    <Grid item>
                        <Link>가입하던가~</Link>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    )
}

export default Login;
