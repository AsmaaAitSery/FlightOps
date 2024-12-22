import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  //TextField,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const AdminManageAircraft = () => {
  const navigate = useNavigate();
  const [aircrafts, setAircrafts] = useState([]);
  const [newAircraft, setNewAircraft] = useState({
    name: "",
    numRows: 0,
    numCols: 0,
  });

  useEffect(() => {
    const fetchAircrafts = async () => {
      try {
        const response = await axios.get("http://localhost:8080/aircraft");
        console.log(response.data);
        setAircrafts(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des avions :", error.response.data);
        // Gérer l'erreur si nécessaire
      }
    };

    fetchAircrafts();
  }, []);

  const handleRemoveAircraft = async (aircraft) => {
    try {
      await axios.delete(`http://localhost:8080/aircraft/${aircraft.id}`);
      setAircrafts(aircrafts.filter((ac) => ac.id !== aircraft.id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'avion :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };

  const handleAddAircraft = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/aircraft",
        newAircraft
      );
      setAircrafts([...aircrafts, response.data.aircraft]);
      setNewAircraft({
        name: "",
        numRows: 0,
        numCols: 0,
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'avion :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };

  const goBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Gérer les Avions
      </Typography>

      {/* Tableau des Avions */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID de l'Avion</TableCell>
              <TableCell>Attribué</TableCell>
              <TableCell>Nombre de Rangées</TableCell>
              <TableCell>Nombre de Colonnes</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {aircrafts.map((aircraft) => (
              <TableRow key={aircraft.id}>
                <TableCell>{aircraft.id}</TableCell>
                <TableCell>{aircraft.assigned ? "Oui" : "Non"}</TableCell>
                <TableCell>{aircraft.numRows}</TableCell>
                <TableCell>{aircraft.numCols}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    onClick={() => handleRemoveAircraft(aircraft)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Formulaire d'Ajout d'Avion */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Ajouter un Nouvel Avion</Typography>
        {/* ... (champs de formulaire existants) */}
        <Button variant="contained" onClick={handleAddAircraft}>
          Ajouter l'Avion
        </Button>
      </Box>

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

export default AdminManageAircraft;
