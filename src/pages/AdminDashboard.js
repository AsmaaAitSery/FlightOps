import React from "react";
import {
  Container,
  Paper,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
  const navigate = useNavigate();

  const browseFlights = () => {
    navigate("/admin/browse-flights");
  };

  const browseCrews = () => {
    navigate("/admin/browse-crews");
  };

  const browseAircrafts = () => {
    navigate("/admin/browse-aircrafts");
  };

  const addOrRemoveCrew = () => {
    navigate("/admin/manage-crew");
  };

  const addOrRemoveAircraft = () => {
    navigate("/admin/manage-aircraft");
  };

  const addOrRemoveDestination = () => {
    navigate("/admin/manage-destinations");
  };

  const manageFlights = () => {
    navigate("/admin/manage-flights");
  };

  const printRegisteredUsers = () => {
    navigate("/admin/print-users");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Tableau de bord Administrateur {/* Traduction */}
      </Typography>

      {/* Consulter les Vols */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Consulter les Vols</Typography>
        <Button onClick={browseFlights}>Consulter les Vols</Button>
        {/* Future: Afficher la liste des vols ici */}
      </Paper>

      {/* Consulter les Équipages */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Consulter les Équipages pour un Vol</Typography>
        <Button onClick={() => browseCrews("AB123")}>Consulter les Équipages</Button>
        {/* Future: Afficher la liste des équipages ici */}
      </Paper>

      {/* Consulter les Avions */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Consulter les Avions</Typography>
        <Button onClick={browseAircrafts}>Consulter les Avions</Button>
        {/* Future: Afficher la liste des avions ici */}
      </Paper>

      {/* Ajouter/Retirer un Équipage */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Gérer les Équipages</Typography>
        <Button onClick={addOrRemoveCrew}>Ajouter/Retirer un Équipage</Button>
        {/* Future: Formulaire pour ajouter/retirer un équipage */}
      </Paper>

      {/* Ajouter/Retirer un Avion */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Gérer les Avions</Typography>
        <Button onClick={addOrRemoveAircraft}>Ajouter/Retirer un Avion</Button>
        {/* Future: Formulaire pour ajouter/retirer un avion */}
      </Paper>

      {/* Ajouter/Retirer des Destinations */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Gérer les Destinations de Vol</Typography>
        <Button onClick={addOrRemoveDestination}>
          Ajouter/Retirer des Destinations
        </Button>
        {/* Future: Formulaire pour ajouter/retirer des destinations */}
      </Paper>

      {/* Gérer les Informations de Vol */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Gérer les Informations de Vol</Typography>
        <Button onClick={manageFlights}>Gérer les Vols</Button>
        {/* Future: Formulaire pour gérer les informations de vol */}
      </Paper>

      {/* Imprimer les Utilisateurs Enregistrés */}
      <Paper sx={{ p: 2, mb: 2 }}>
        <Typography variant="h6">Utilisateurs Enregistrés</Typography>
        <Button onClick={printRegisteredUsers}>Imprimer les Utilisateurs</Button>
        {/* Future: Afficher la liste des utilisateurs enregistrés */}
      </Paper>
    </Container>
  );
};

export default AdminDashboard;
