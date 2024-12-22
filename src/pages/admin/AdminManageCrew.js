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

const AdminManageCrew = () => {
  const navigate = useNavigate();
  const [crews, setCrews] = useState([]);
  const [newCrew, setNewCrew] = useState({
    name: "",
    numCrewMembers: 0
  });

  useEffect(() => {
    const fetchCrews = async () => {
      try {
        const response = await axios.get("http://localhost:8080/crew");
        console.log(response.data);
        setCrews(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des équipages :", error.response.data);
        // Gérer l'erreur si nécessaire
      }
    };

    fetchCrews();
  }, []);

  const handleRemoveCrew = async (crew) => {
    try {
      await axios.delete(`http://localhost:8080/crew/${crew.id}`);
      setCrews(crews.filter((ac) => ac.id !== crew.id));
    } catch (error) {
      console.error("Erreur lors de la suppression de l'équipage :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };

  const handleAddCrew = async () => {
    try {
      const response = await axios.post(
        "http://localhost:8080/crew",
        newCrew
      );
      setCrews([...crews, response.data.crew]);
      setNewCrew({
        name: "",
        numCrewMembers: 0
      });
    } catch (error) {
      console.error("Erreur lors de l'ajout de l'équipage :", error.response.data);
      // Gérer l'erreur si nécessaire
    }
  };

  const goBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Gérer l'Équipage
      </Typography>

      {/* Tableau des Équipages */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID de l'Équipage</TableCell>
              <TableCell>Attribué</TableCell>
              <TableCell>Nombre de Membres de l'Équipage</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {crews.map((crew) => (
              <TableRow key={crew.id}>
                <TableCell>{crew.id}</TableCell>
                <TableCell>{crew.assigned ? "Oui" : "Non"}</TableCell>
                <TableCell>{crew.numCrewMembers}</TableCell>
                <TableCell>
                  <Button
                    color="secondary"
                    onClick={() => handleRemoveCrew(crew)}
                  >
                    Supprimer
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Formulaire d'Ajout d'Équipage */}
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5">Ajouter un Nouvel Équipage</Typography>
        {/* ... (champs de formulaire existants) */}
        <Button variant="contained" onClick={handleAddCrew}>
          Ajouter l'Équipage
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

export default AdminManageCrew;


/*import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Typography,
  TextField,
  Button,
  Box,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
} from "@mui/material";

const AdminManageCrew = () => {
  const navigate = useNavigate();
  const [flightNumber, setFlightNumber] = useState("");
  const [crewData, setCrewData] = useState({
    flightNumber: "",
    crewMembers: [],
  });
  const [loading, setLoading] = useState(false);
  const [availableCrews, setAvailableCrews] = useState([]);
  const [selectedCrew, setSelectedCrew] = useState("");
  const [isFlightSearched, setIsFlightSearched] = useState(false);

  const fetchCrewData = async (flightNum) => {
    setLoading(true);
    setIsFlightSearched(true);
    // Simuler la récupération des données de l'équipage
    setTimeout(() => {
      setCrewData({
        flightNumber: flightNum,
        crewMembers: [
          "Capitaine Smith",
          "Premier Officier Jones",
          "Agent de Bord Brown",
        ],
      });
      setLoading(false);
    }, 1000);

    // Simuler la récupération des équipages disponibles
    setAvailableCrews([
      "Capitaine Green",
      "Premier Officier White",
      "Agent de Bord Black",
    ]);
  };

  const handleAddCrew = () => {
    if (selectedCrew) {
      setCrewData((prevCrewData) => ({
        ...prevCrewData,
        crewMembers: [...prevCrewData.crewMembers, selectedCrew],
      }));
      setSelectedCrew("");
    }
  };

  const handleRemoveCrew = (memberName) => {
    setCrewData((prevCrewData) => ({
      ...prevCrewData,
      crewMembers: prevCrewData.crewMembers.filter(
        (member) => member !== memberName
      ),
    }));
  };

  const goBackToDashboard = () => {
    navigate("/admin-dashboard");
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Gérer l'Équipage
      </Typography>
      <Box sx={{ mb: 4 }}>
        <TextField
          label="Numéro de Vol"
          value={flightNumber}
          onChange={(e) => setFlightNumber(e.target.value)}
          sx={{ mr: 2 }}
        />
        <Button
          variant="contained"
          onClick={() => fetchCrewData(flightNumber)}
          disabled={loading || !flightNumber}
        >
          {loading ? "Chargement..." : "Rechercher"}
        </Button>
      </Box>

      {isFlightSearched && crewData && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">
            Équipage Actuel pour le Vol {crewData.flightNumber}
          </Typography>
          <List>
            {crewData.crewMembers.map((member, index) => (
              <ListItem key={index}>
                <ListItemText primary={member} />
                <Button
                  color="secondary"
                  onClick={() => handleRemoveCrew(member)}
                >
                  Supprimer
                </Button>
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      {isFlightSearched && (
        <Box sx={{ mt: 4 }}>
          <Typography variant="h6">Ajouter un Membre de l'Équipage</Typography>
          <Select
            value={selectedCrew}
            onChange={(e) => setSelectedCrew(e.target.value)}
            displayEmpty
            fullWidth
            sx={{ mb: 2 }}
          >
            <MenuItem value="" disabled>
              Sélectionner un Membre de l'Équipage
            </MenuItem>
            {availableCrews.map((crew, index) => (
              <MenuItem key={index} value={crew}>
                {crew}
              </MenuItem>
            ))}
          </Select>
          <Button variant="contained" onClick={handleAddCrew}>
            Ajouter un Membre de l'Équipage
          </Button>
        </Box>
      )}

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

export default AdminManageCrew;*/
