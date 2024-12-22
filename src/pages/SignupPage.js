import React, { useState } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  Grid,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignupPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (event) => {
    event.preventDefault();
    // Placeholder pour la logique d'inscription
    // alert(`Inscription tentée pour le nom d'utilisateur : ${username}`);

    try {
      // Faire une requête d'inscription vers le backend
      const response = await axios.post("http://localhost:8080/api/users", {
        username,
        password,
        firstName,
        lastName,
        email,
      });

      // Gérer la réponse comme nécessaire
      console.log("Inscription réussie :", response.data);
      // Vous pouvez aussi rediriger l'utilisateur vers une autre page ou effectuer d'autres actions en cas de succès
      navigate("/");
    } catch (error) {
      // Gérer les erreurs
      console.error("Échec de l'inscription :", error.response.data);
      // Vous pouvez afficher un message d'erreur à l'utilisateur ou effectuer d'autres actions en cas d'échec
    }
  };

  return (
    <Box>
      <Container maxWidth="sm" sx={{ mt: 8, mb: 6 }}>
        <Typography variant="h4" gutterBottom>
          Inscription
        </Typography>
        <Box component="form" onSubmit={handleSignup} noValidate sx={{ mt: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                label="Nom d'utilisateur"
                fullWidth
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
            <Grid item xs={12}>
              <TextField
                label="Prénom"
                fullWidth
                variant="outlined"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Nom"
                fullWidth
                variant="outlined"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Email"
                fullWidth
                type="email"
                variant="outlined"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            S'inscrire
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default SignupPage;
