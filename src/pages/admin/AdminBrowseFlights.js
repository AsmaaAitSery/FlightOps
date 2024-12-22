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
} from "@mui/material";
import { useNavigate } from "react-router-dom"; // Importer useNavigate

import axios from "axios";

const BrowseFlights = () => {
  const [flights, setFlights] = useState([]);
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:8080/flight");
        console.log(response.data);
        setFlights(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des vols :", error.response.data);
        // Gérer les erreurs si nécessaire
      }
    };

    fetchFlights();
  }, []);

  const goBackToDashboard = () => {
    navigate("/admin-dashboard"); // Utiliser navigate pour revenir au tableau de bord
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Parcourir les Vols
      </Typography>

      {/* Tableau des Vols */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID du Vol</TableCell>
              <TableCell>Origine</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Date de Départ</TableCell>
              {/* Ajouter plus de colonnes pour d'autres détails des vols */}
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow key={flight.id}>
                <TableCell>{flight.id}</TableCell>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.departureDate}</TableCell>
                {/* Ajouter plus de cellules pour d'autres détails des vols */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Bouton Retour au Tableau de Bord */}
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

export default BrowseFlights;
