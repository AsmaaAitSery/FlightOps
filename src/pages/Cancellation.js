import React, { useState } from "react";
import axios from "axios";
import { TextField, Button, Paper, Typography, Container } from "@mui/material";

const CancellationPage = () => {
  const [ticketId, setTicketId] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // Ajout d'un état de chargement pour améliorer l'UX

  const handleCancellation = async () => {
    if (!ticketId) {
      setMessage("Veuillez entrer un identifiant de billet valide."); // Message de validation pour ID vide
      return;
    }

    setLoading(true); // Définir l'état de chargement sur vrai lors du début de la requête
    try {
      const response = await axios.post(
        `http://localhost:8080/cancel-ticket`,
        null,
        {
          params: { ticketId },
        }
      );
      setMessage(response.data); // Afficher le message de réponse
    } catch (error) {
      console.error("Erreur lors de l'annulation du billet:", error);
      if (error.response) {
        // Gérer les erreurs de réponse du serveur
        setMessage(`Erreur : ${error.response.data.message || "Échec de l'annulation du billet."}`);
      } else {
        // Gérer les erreurs de réseau ou d'autres types d'erreurs
        setMessage("Échec de l'annulation du billet. Veuillez réessayer plus tard.");
      }
    } finally {
      setLoading(false); // Définir l'état de chargement sur faux après que la requête soit terminée
    }
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "20px", marginTop: "30px" }}>
        <Typography variant="h5" gutterBottom>
          Annuler votre billet
        </Typography>
        <TextField
          label="Identifiant du billet"
          value={ticketId}
          onChange={(e) => setTicketId(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCancellation}
          style={{ marginTop: "10px" }}
          disabled={loading} // Désactiver le bouton pendant le chargement
        >
          {loading ? "Annulation en cours..." : "Annuler le billet"} {/* Affichage de l'état de chargement */}
        </Button>
        {message && (
          <Typography color={message.includes("Échec") ? "error" : "textSecondary"} style={{ marginTop: "20px" }}>
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
  );
};

export default CancellationPage;
