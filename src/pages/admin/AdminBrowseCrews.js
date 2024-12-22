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

const BrowseCrew = () => {
  const [crews, setCrews] = useState([]);
  const navigate = useNavigate(); // Initialiser useNavigate

  useEffect(() => {
    const fetchCrews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/crew");
        console.log(response.data);
        setCrews(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipages :", error.response.data);
        // Gérer les erreurs si nécessaire
      }
    };

    fetchCrews();
  }, []);

  const goBackToDashboard = () => {
    navigate("/admin-dashboard"); // Utiliser navigate pour revenir au tableau de bord
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Parcourir les Équipages
      </Typography>

      {/* Tableau des Équipages */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ textAlign: "center" }}>ID de l'Équipage</TableCell>
              <TableCell style={{ textAlign: "center" }}>Attribué</TableCell>
              <TableCell style={{ textAlign: "center" }}>Nombre de Membres de l'Équipage</TableCell>
              <TableCell style={{ textAlign: "center" }}>ID du Vol</TableCell>
              {/* Ajouter plus de colonnes pour d'autres détails des équipages */}
            </TableRow>
          </TableHead>
          <TableBody>
            {crews.map((crew) => (
              <TableRow key={crew.id}>
                <TableCell style={{ textAlign: "center" }}>{crew.id}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{crew.assigned}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{crew.numCrewMembers}</TableCell>
                <TableCell style={{ textAlign: "center" }}>{crew.flightid}</TableCell>
                {/* Ajouter plus de cellules pour d'autres détails des équipages */}
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

export default BrowseCrew;
