import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useDispatch } from "react-redux";
import { checkingAuthentication } from "../../store/auth/thunks";

export const LoginPage = () => {
  const dispatch = useDispatch()  

  const {formState, email, password, onInputChange, onResetForm} = useForm({
    email: 'fer@gmail.com',
    password: '123456'
  });

const onSubmit = (event) => {
  event.preventDefault();  
  dispatch(checkingAuthentication(email, password));
}

const onGoogleSignIn = () => {
  console.log('onGoogleSignIn');
}

  return (
    <form onSubmit={onSubmit}>
      <Grid container>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField 
            label="Email"
            type="email"
            placeholder="Email"
            fullWidth
            name="email"
            value={email}
            onChange={onInputChange}
             />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
            name="password"
            value={password}
            onChange={onInputChange}
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" type="submit" fullWidth>
              Login
            </Button>
          </Grid>

          <Grid item xs={12} sm={6}>
            <Button
               variant="contained"
               fullWidth
               onClick={onGoogleSignIn}
               >
              <Google />
              <Typography sx={{ ml: 1 }}>Google</Typography>
            </Button>
          </Grid>
        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Link component={RouterLink} color="inherit" to="/auth/register">
            Create account
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
