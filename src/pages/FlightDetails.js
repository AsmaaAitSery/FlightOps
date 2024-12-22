import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Typography, Paper, Button, Box } from "@mui/material";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

const FlightDetails = () => {
  const { flightId } = useParams();
  const [aircraftId, setAircraftId] = useState(null);
  const [seatMap, setSeatMap] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [takenSeats, setTakenSeats] = useState([]); // Ajouté état pour les sièges occupés
  const [hasMadeSelection, setHasMadeSelection] = useState(false);

  const navigate = useNavigate();

  const handleProceedToPayment = () => {
    if (selectedSeats.length === 0) {
      // Vérifier si un siège est sélectionné
      alert("Veuillez sélectionner au moins un siège avant de continuer.");
    } else {
      navigate("/payment", { state: { flightId, aircraftId, selectedSeats } });
    }
  };

  const handleSeatClick = (seat) => {
    if (seat && !takenSeats.includes(seat)) {
      const isAlreadySelected = selectedSeats.includes(seat);
      setSelectedSeats(
        isAlreadySelected
          ? selectedSeats.filter((s) => s !== seat)
          : [...selectedSeats, seat]
      );
    }
  };

  useEffect(() => {
    const fetchAircraftId = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/aircraftId/${flightId}`
        );
        setAircraftId(response.data);
      } catch (error) {
        console.error("Erreur lors de la récupération de l'avion :", error);
      }
    };

    fetchAircraftId();
  }, [flightId]);

  useEffect(() => {
    const fetchSeats = async () => {
      if (aircraftId) {
        try {
          const response = await axios.get(
            `http://localhost:8080/seats/${aircraftId}`
          );
          setSeatMap(response.data);
          const takenSeatsArray = response.data
            .filter((seat) => !seat.availability) // Supposons que 'availability' indique si un siège est occupé
            .map((seat) => `${seat.rowNum}${seat.colChar}`);
          setTakenSeats(takenSeatsArray);
        } catch (error) {
          console.error("Erreur lors de la récupération des sièges :", error);
        }
      }
    };

    fetchSeats();
  }, [aircraftId]);

  const generateSeatRows = () => {
    const rows = [];
    const alphabet = "ABCDEF"; // À modifier selon les besoins

    for (let i = 1; i <= 20; i++) {
      const row = [];
      for (let j = 0; j < 6; j++) {
        row.push(`${i}${alphabet[j]}`);
        if (j === 2) {
          row.push(null); // Séparation
        }
      }
      rows.push(row);
    }
    return rows;
  };

  const seatRows = generateSeatRows();

  return (
    <div>
      <Container
        maxWidth="md"
        sx={{ my: 4, backgroundColor: "#f7f7f7", borderRadius: 2, p: 3 }}
      >
        <Typography
          variant="h4"
          gutterBottom
          component="div"
          sx={{ textAlign: "center", mb: 3 }}
        >
          Détails du vol - Vol {flightId}
        </Typography>
        <Paper elevation={3} sx={{ p: 2, backgroundColor: "#fafafa" }}>
          <Typography variant="h6" sx={{ mb: 2 }}>
            ID de l'avion : {aircraftId}
          </Typography>
          <Box sx={{ mb: 3, display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <Typography variant="h6">Sièges sélectionnés :</Typography>
            {selectedSeats.map((seat) => (
              <Typography
                key={seat}
                component="span"
                sx={{
                  backgroundColor: "#e0e0e0",
                  padding: "5px 10px",
                  borderRadius: "4px",
                }}
              >
                {seat}
              </Typography>
            ))}
          </Box>
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: "repeat(7, 50px)",
              gap: "10px",
              mb: 3,
            }}
          >
            {seatRows.map((row, rowIndex) => (
              <React.Fragment key={rowIndex}>
                {row.map((seat, columnIndex) => {
                  const isTaken = takenSeats.includes(seat);
                  return (
                    <Box
                      key={`${rowIndex}-${columnIndex}`}
                      sx={{
                        width: 50,
                        height: 50,
                        border: "1px solid black",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        cursor: isTaken ? "default" : "pointer",
                        backgroundColor: isTaken
                          ? "#ff6666"
                          : selectedSeats.includes(seat)
                          ? "#66ff66"
                          : "#fff",
                        ":hover": {
                          backgroundColor:
                            !isTaken && !selectedSeats.includes(seat)
                              ? "#e6e6e6"
                              : "",
                        },
                      }}
                      onClick={() => !isTaken && handleSeatClick(seat)}
                    >
                      {seat}
                    </Box>
                  );
                })}
              </React.Fragment>
            ))}
          </Box>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={handleProceedToPayment}
          >
            Passer à la paiement
          </Button>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default FlightDetails;
