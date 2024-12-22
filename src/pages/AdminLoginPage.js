import React, { useState } from "react";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const AdminLoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAdminLogin = (event) => {
    event.preventDefault();
    // Pour la démo, les identifiants sont "admin" et "password"
    if (username === "admin" && password === "password") {
      navigate("/admin-dashboard"); // Redirection vers le tableau de bord administrateur
    } else {
      alert("Identifiants incorrects"); // Affichage d'une alerte en cas d'échec
    }
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Connexion Administrateur {/* Titre traduit */}
        </Typography>
        <Box
          component="form"
          onSubmit={handleAdminLogin}
          noValidate
          sx={{ mt: 1 }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nom d'utilisateur" // Titre du champ en français
                fullWidth
                autoFocus
                variant="outlined"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Mot de passe" // Titre du champ en français
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
            Connexion Administrateur {/* Bouton traduit */}
          </Button>
        </Box>
      </Container>

      <Footer />
    </Box>
  );
};

export default AdminLoginPage;
