import {
  Alert,
  Button,
  Grid,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSignInWithEmail } from "../../store/auth/thunks";

const initialForm = {
  email: "",
  password: "",
  displayName: "",
};

const formValidations = {
  email: [(value) => value.includes("@"), "Email is invalid"],
  password: [
    (value) => value.length >= 6,
    "Password should be more than 6 characters",
  ],
  displayName: [(value) => value.length >= 1, "The name is required"],
};
export const RegisterPage = () => {
  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const {
    onInputChange,
    onResetForm,
    formState,
    email,
    password,
    displayName,
    isFormValid,
    emailValid,
    passwordValid,
    displayNameValid,
  } = useForm(initialForm, formValidations);
  const { status, errorMessage } = useSelector((state) => state.auth);  
  const isAuthenticating = useMemo(() => status === "checking", [status]);

  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    dispatch(startSignInWithEmail(formState));
  };

  return (
    <form 
      onSubmit={onSubmit}
      className="animate__animated animate__fadeIn animate__faster"
      >
      <Grid container>
        <h2>{isFormValid ? "Formulario válido" : "Formulario inválido"}</h2>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Nombre Completo"
            type="text"
            placeholder="john Doe"
            name="displayName"
            value={displayName}
            onChange={onInputChange}
            fullWidth
            error={!!displayNameValid && formSubmitted}
            helperText={formSubmitted && displayNameValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Email"
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={onInputChange}
            fullWidth
            error={!!emailValid && formSubmitted}
            helperText={formSubmitted && emailValid}
          />
        </Grid>
        <Grid item xs={12} sx={{ mt: 2 }}>
          <TextField
            label="Password"
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            onChange={onInputChange}
            fullWidth
            error={!!passwordValid && formSubmitted}
            helperText={formSubmitted && passwordValid}
          />
        </Grid>
        <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
          <Grid item xs={12}
            display={!!errorMessage ? "" : "none"}
           >
            <Alert severity="error">{errorMessage}</Alert>
          </Grid>
          <Grid item xs={12}>
            <Button
              disabled={isAuthenticating}
              variant="contained"
              fullWidth
              type="submit"
            >
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
