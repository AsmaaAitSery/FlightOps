import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  FormControl,
  Select,
  MenuItem,
  InputLabel,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ManageFlights = () => {
  const navigate = useNavigate();
  const [flights, setFlights] = useState([]); // État pour les vols
  const [locations, setLocations] = useState([]); // État pour les destinations
  const [origin, setOrigin] = useState({}); // État pour l'origine du vol
  const [destination, setDestination] = useState({}); // État pour la destination du vol
  const [departureDate, setDepartureDate] = useState(""); // État pour la date de départ

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/location");
        setLocations(response.data); // Mettre à jour les emplacements récupérés
        console.log("Emplacements récupérés :", response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des emplacements :", error);
        // Gérer l'erreur si nécessaire
      }
    };

    fetchLocations(); // Récupérer les emplacements au chargement initial
    fetchFlights(); // Récupérer les vols au chargement initial
  }, []);

  const fetchFlights = async () => {
    try {
      const response = await axios.get("http://localhost:8080/flight");
      setFlights(response.data); // Mettre à jour les vols récupérés
      console.log("Vols récupérés :", response.data);
    } catch (error) {
      console.error("Erreur lors de la récupération des vols :", error);
      // Gérer l'erreur si nécessaire
    }
  };

  const handleAddFlight = async () => {
    try {
      // Vérifier que l'origine, la destination et la date de départ sont sélectionnés
      if (!origin.city || !destination.city || !departureDate) {
        alert("Veuillez sélectionner l'origine, la destination et la date de départ.");
        return;
      }

      const formattedDate = new Date(departureDate).toISOString().split("T")[0]; // Formater la date

      const newFlight = {
        origin: origin.city,
        destination: destination.city,
        departureDate: formattedDate,
        // Ajouter d'autres champs nécessaires pour le nouveau vol
      };

      await axios.post("http://localhost:8080/flight", newFlight); // Ajouter un nouveau vol
      fetchFlights(); // Récupérer les vols mis à jour après l'ajout

      // Réinitialiser les champs après l'ajout du vol
      setOrigin({});
      setDestination({});
      setDepartureDate("");
    } catch (error) {
      console.error("Erreur lors de l'ajout du vol :", error);
      // Gérer l'erreur si nécessaire
    }
  };

  const handleRemoveFlight = async (flightId) => {
    try {
      await axios.delete(`http://localhost:8080/flight/${flightId}`); // Supprimer un vol
      fetchFlights(); // Récupérer les vols mis à jour après la suppression
    } catch (error) {
      console.error("Erreur lors de la suppression du vol :", error);
      // Gérer l'erreur si nécessaire
    }
  };

  const handleBackToDashboard = () => {
    navigate("/admin-dashboard"); // Retourner au tableau de bord de l'administrateur
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Gérer les Vols
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel>Origine</InputLabel>
          <Select
            value={origin.city || ""}
            onChange={(e) => {
              const selectedLocation = locations.find(
                (loc) => loc.city === e.target.value
              );
              setOrigin(selectedLocation || {}); // Mettre à jour l'origine sélectionnée
            }}
          >
            {locations.map((location, index) => (
              <MenuItem key={index} value={location.city}>
                {location.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl sx={{ minWidth: 200, mr: 2 }}>
          <InputLabel>Destination</InputLabel>
          <Select
            value={destination.city || ""}
            onChange={(e) => {
              const selectedLocation = locations.find(
                (loc) => loc.city === e.target.value
              );
              setDestination(selectedLocation || {}); // Mettre à jour la destination sélectionnée
            }}
          >
            {locations.map((location, index) => (
              <MenuItem key={index} value={location.city}>
                {location.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          type="date"
          value={departureDate}
          onChange={(e) => setDepartureDate(e.target.value)} // Mettre à jour la date de départ
          sx={{ minWidth: 200 }}
        />
        <Button variant="contained" onClick={handleAddFlight}>
          Ajouter un vol
        </Button>
      </Box>

      {/* Tableau pour afficher les vols */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Origine</TableCell>
              <TableCell>Destination</TableCell>
              <TableCell>Date de départ</TableCell>
              <TableCell>Actions</TableCell> {/* En-tête de table pour les actions */}
              {/* Ajouter d'autres en-têtes de table */}
            </TableRow>
          </TableHead>
          <TableBody>
            {flights.map((flight) => (
              <TableRow key={flight.id}>
                <TableCell>{flight.origin}</TableCell>
                <TableCell>{flight.destination}</TableCell>
                <TableCell>{flight.departureDate}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    color="secondary"
                    onClick={() => handleRemoveFlight(flight.id)} // Supprimer un vol
                  >
                    Supprimer
                  </Button>
                </TableCell>
                {/* Ajouter d'autres cellules de table */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Button
        variant="contained"
        color="primary"
        onClick={handleBackToDashboard}
        sx={{ mt: 3 }}
      >
        Retour au tableau de bord
      </Button>
    </Container>
  );
};

export default ManageFlights;
