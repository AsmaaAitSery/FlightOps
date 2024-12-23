import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  IconButton,
  MenuItem,
  Paper,
  Box,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import { styled } from "@mui/material/styles";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import backgroundImage from "../pic.jpg";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [fromLocation, setFromLocation] = useState("");
  const [destination, setDestination] = useState("");
  const [departureDate, setDepartureDate] = useState("");
  const [locations, setLocations] = useState([]); // État pour les localisations
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await axios.get("http://localhost:8080/location");
        setLocations(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération des localisations :", error.response.data);
      }
    };

    fetchLocations();
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!departureDate) {
      alert("Veuillez remplir la date de départ.");
    } else if (fromLocation === destination) {
      alert("Le lieu de départ et la destination ne peuvent pas être identiques.");
    } else {
      navigate("/flight-search", {
        state: { fromLocation, destination, departureDate },
      });
    }
  };

  const handleSwapLocations = () => {
    setFromLocation(destination);
    setDestination(fromLocation);
  };

  const StyledContainer = styled(Container)(({ theme }) => ({
    backgroundColor: "rgba(255, 255, 255, 0.8)",
    padding: theme.spacing(4),
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.shadows[3],
    backdropFilter: "blur(8px)",
  }));

  const StyledPaper = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(3),
    margin: theme.spacing(3, 0),
    backgroundColor: "#f5f5f5",
  }));

  const BackgroundImageContainer = styled("div")({
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    zIndex: -1, // Assurez-vous que l'image est derrière tout le contenu
  });

  return (
    <Box position="relative">
      <BackgroundImageContainer /> {/* Inclure l'image de fond */}
      <StyledContainer maxWidth="md">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <FlightTakeoffIcon style={{ fontSize: 60, color: "#123456" }} />
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              gutterBottom
            >
              Bienvenue sur notre service de réservation de vols
            </Typography>
            <Typography
              style={{ fontSize: "1.5rem", fontStyle: "italic" }}
              gutterBottom
            >
              Trouvez et réservez des vols facilement.
            </Typography>
          </Grid>
        </Grid>

        <StyledPaper>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={handleSubmit}
          >
            <Grid container spacing={3}>
              <Grid item xs={12} sm={5}>
                <TextField
                  select
                  label="Lieu de départ"
                  fullWidth
                  value={fromLocation}
                  onChange={(e) => setFromLocation(e.target.value)}
                  variant="outlined"
                >
                  {locations.map((location) => (
                    <MenuItem key={location.id} value={location.city}>
                      {location.city}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={1}>
                <IconButton
                  onClick={handleSwapLocations}
                  sx={{ alignSelf: "center" }}
                >
                  <SwapHorizIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12} sm={5}>
                <TextField
                  select
                  label="Destination"
                  fullWidth
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  variant="outlined"
                >
                  {locations.map((location) => (
                    <MenuItem key={location.id} value={location.city}>
                      {location.city}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  type="date"
                  label="Date de départ"
                  fullWidth
                  InputLabelProps={{ shrink: true }}
                  value={departureDate}
                  onChange={(e) => setDepartureDate(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ mt: 3, mb: 2 }}
            >
              Rechercher des vols
            </Button>
          </Box>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </Box>
  );
};

export default HomePage;
