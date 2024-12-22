import React, { useState } from "react";
import axios from "axios"; // Importer axios
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
  Link,
} from "@mui/material";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Importer useNavigate
import Header from "../components/Header";
import Footer from "../components/Footer";

const LoginPage = ({ updateLoginStatus }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook pour la navigation

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:8080/api/users/login",
        {
          username,
          password,
        }
      );

      console.log("Connexion réussie:", response.data);
      updateLoginStatus(response.data.firstName); // Appeler updateLoginStatus passé depuis App.js
      navigate("/"); // Naviguer vers la page d'accueil ou tableau de bord
    } catch (error) {
      console.error(
        "Échec de la connexion:",
        error.response ? error.response.data : error
      );
      alert("Échec de la connexion : Nom d'utilisateur ou mot de passe incorrect");
    }
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Connexion
        </Typography>
        <Box component="form" onSubmit={handleLogin} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nom d'utilisateur"
                fullWidth
                autoFocus
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mot de passe"
                fullWidth
                type="password"
                variant="outlined"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            sx={{ mt: 3, mb: 2 }}
          >
            Connexion
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link component={RouterLink} to="/signup" variant="body2">
                Créer un utilisateur
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default LoginPage;
