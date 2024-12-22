import React, { useState, useEffect } from "react";
import { Container, Typography, Paper, Button } from "@mui/material";
import QrCodeIcon from "@mui/icons-material/QrCode";
import Barcode from "react-barcode";
import moment from "moment";

const Promos = ({ username }) => {
  // On suppose que le prop 'username' est passé
  const [ticketRedeemed, setTicketRedeemed] = useState(false);
  const [redeemDate, setRedeemDate] = useState("");
  const [nextAvailableDate, setNextAvailableDate] = useState("");

  useEffect(() => {
    const redeemedKey = `redeemedTime_${username}`; // Clé spécifique à l'utilisateur
    const redeemedTime = localStorage.getItem(redeemedKey);
    if (redeemedTime) {
      const redeemedDate = new Date(parseInt(redeemedTime));
      const yearLater = new Date(redeemedDate).setFullYear(
        redeemedDate.getFullYear() + 1
      );

      setRedeemDate(moment(redeemedDate).format("MMMM Do YYYY, h:mm:ss a"));
      setNextAvailableDate(moment(yearLater).format("MMMM Do YYYY"));

      if (Date.now() < yearLater) {
        setTicketRedeemed(true);
      }
    }
  }, [username]);

  const handleRedeemTicket = () => {
    const now = Date.now();
    const redeemedKey = `redeemedTime_${username}`; // Clé spécifique à l'utilisateur
    localStorage.setItem(redeemedKey, now.toString());
    setRedeemDate(moment(now).format("MMMM Do YYYY, h:mm:ss a"));
    setNextAvailableDate(
      moment(new Date(now).setFullYear(new Date(now).getFullYear() + 1)).format(
        "MMMM Do YYYY"
      )
    );
    setTicketRedeemed(true);
  };

  return (
    <Container maxWidth="md" style={{ marginTop: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Vos Récompenses de Fidélité
      </Typography>

      {/* Promotions mensuelles */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Promotions de Décembre
        </Typography>
        <Typography>
          - Profitez de 20% de réduction sur tous les vols internationaux ce mois-ci ! <br />
          - Des réductions exclusives pour les destinations sélectionnées pendant la saison des fêtes. <br />
          - Doublez vos miles sur tous les vols réservés ce mois-ci.
        </Typography>
      </Paper>

      {/* Accès aux salons d'aéroport */}
      <Paper style={{ padding: "20px", marginBottom: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Accès aux Salons d'Aéroport
        </Typography>
        <Typography>
          Profitez d'un accès à nos salons d'aéroport exclusifs à un tarif réduit. <br />
          Montrez le code QR ci-dessous à l'entrée du salon pour bénéficier de la réduction.
        </Typography>
        <QrCodeIcon style={{ fontSize: 100, marginTop: "10px" }} />
      </Paper>

      {/* Billet gratuit pour un compagnon */}
      <Paper style={{ padding: "20px" }}>
        <Typography variant="h6" gutterBottom>
          Billet Gratuit pour un Compagnon
        </Typography>
        <Typography>
          Recevez un billet gratuit pour un compagnon chaque année dans le cadre de notre programme de fidélité. <br />
          Échangez votre billet maintenant et planifiez votre prochain voyage avec un être cher !
        </Typography>
        {!ticketRedeemed ? (
          <Button
            variant="contained"
            color="primary"
            style={{ marginTop: "10px" }}
            onClick={handleRedeemTicket}
          >
            Échanger Billet Gratuit
          </Button>
        ) : (
          <>
            <Barcode value="123456789012" format="CODE128" />
            <Typography variant="body1" style={{ marginTop: "10px" }}>
              Échangé le : {redeemDate}
            </Typography>
            <Typography variant="body1">
              Prochaine date disponible : {nextAvailableDate}
            </Typography>
          </>
        )}
      </Paper>
    </Container>
  );
};

export default Promos;
