import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Box,
  CircularProgress,
  Alert,
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importer useNavigate
import axios from "axios";

const BrowseAircrafts = () => {
  const [aircrafts, setAircrafts] = useState([]);
  const [loading, setLoading] = useState(true); // État pour le chargement
  const [error, setError] = useState(null); // État pour la gestion des erreurs
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    const fetchAircrafts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/aircraft");
        setAircrafts(response.data);
      } catch (error) {
        setError("Erreur lors de la récupération des appareils : " + error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAircrafts();
  }, []);

  const goBackToDashboard = () => {
    navigate("/admin-dashboard"); // Utiliser navigate pour revenir au tableau de bord
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Parcourir les Appareils
      </Typography>

      {/* Afficher le spinner de chargement si les données sont en cours de chargement */}
      {loading && <CircularProgress sx={{ display: "block", margin: "auto" }} />}

      {/* Afficher le message d'erreur s'il y a une erreur */}
      {error && <Alert severity="error">{error}</Alert>}

      {/* Tableau des Appareils */}
      {!loading && !error && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>ID de l'Appareil</TableCell>
                <TableCell>Attribué</TableCell>
                <TableCell>Nombre de Rangées</TableCell>
                <TableCell>Nombre de Colonnes</TableCell>
                {/* Ajouter plus de colonnes pour d'autres détails des appareils */}
              </TableRow>
            </TableHead>
            <TableBody>
              {aircrafts.map((aircraft) => (
                <TableRow key={aircraft.id}>
                  <TableCell>{aircraft.id}</TableCell>
                  <TableCell>{aircraft.assigned ? "Oui" : "Non"}</TableCell>
                  <TableCell>{aircraft.numRows}</TableCell>
                  <TableCell>{aircraft.numCols}</TableCell>
                  {/* Ajouter plus de cellules pour d'autres détails des appareils */}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}

      {/* Bouton pour revenir au tableau de bord */}
      <Button
        variant="contained"
        color="primary"
        onClick={goBackToDashboard}
        sx={{ mt: 3 }}
      >
        Retour au Tableau de Bord
      </Button>
    </Container>
  );
};

export default BrowseAircrafts;
