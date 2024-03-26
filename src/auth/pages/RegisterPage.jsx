import { Google } from "@mui/icons-material";
import { Button, Grid, Link, TextField, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <form action="">
      <Grid container>
      <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="Nombre Completo" type="text" placeholder="john Doe" fullWidth />
        </Grid>        
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField label="Email" type="email" placeholder="Email" fullWidth />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            fullWidth
          />
        </Grid>

        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12} >
            <Button variant="contained" fullWidth>
              Crear Cuenta
            </Button>
          </Grid>

        </Grid>

        <Grid container direction="row" justifyContent="end">
          <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
          <Link component={RouterLink} color="inherit" to="/auth">
            Login
          </Link>
        </Grid>
      </Grid>
    </form>
  );
};
