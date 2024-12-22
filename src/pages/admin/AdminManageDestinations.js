import React, { useState, useEffect } from "react";
import axios from 'axios'
import {
  Container,
  Typography,
  Button,
  Box,
  TextField,
  Table,
  TableContainer,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminManageDestinations = () => {
  const navigate = useNavigate();

  const [locations, setLocations] = useState([]);
  const [newLocationCity, setNewLocationCity] = useState("");
  const [newLocationProvince, setNewLocationProvince] = useState("");
  const [newLocationCountry, setNewLocationCountry] = useState("");

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/location");
        setLocations(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des emplacements :", error.response.data);
        // Gérer l'erreur si nécessaire
      }
    };

    fetchLocations();
  }, []);

  const handleRemoveLocation = async (location) => {
    try {
      await axios.delete(`http://localhost:8080/location/${location.id}`);
      setLocations(locations.filter((loc) => loc.id !== location.id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'emplacement :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };
  
  const handleAddLocation = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/location",
        {
          name: "",
          city: newLocationCity,
          province_state: newLocationProvince,
          country: newLocationCountry,
        }
      );

      setLocations([...locations, response.data.location]);
      setNewLocationCity("");
      setNewLocationProvince("");
      setNewLocationCountry("");
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'emplacement :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };

  const goBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Gérer les destinations
      </Typography>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID de l'emplacement</TableCell>
              <TableCell>Ville</TableCell>
              <TableCell>Province/État</TableCell>
              <TableCell>Pays</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {locations.map((location) => (
              <TableRow key={location.id}>
                <TableCell>{location.id}</TableCell>
                <TableCell>{location.city}</TableCell>
                <TableCell>{location.province_state}</TableCell>
                <TableCell>{location.country}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    onClick={() => handleRemoveLocation(location)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ mt: 4 }}>
        <TextField
          label="Ville"
          value={newLocationCity}
          onChange={(e) => setNewLocationCity(e.target.value)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Province/État"
          value={newLocationProvince}
          onChange={(e) => setNewLocationProvince(e.target.value)}
          sx={{ mr: 2 }}
        />
        <TextField
          label="Pays"
          value={newLocationCountry}
          onChange={(e) => setNewLocationCountry(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleAddLocation}>
          Ajouter un emplacement
        </Button>
      </Box>

      <Button
        variant="contained"
        color="primary"
        onClick={goBackToDashboard}
        sx={{ mt: 3 }}
      >
        Retour au tableau de bord
      </Button>
    </Container>
  );
};

export default AdminManageDestinations;
