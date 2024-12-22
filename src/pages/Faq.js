import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const FAQ = () => {
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <Typography variant="h4" gutterBottom>
          Questions Fréquemment Posées (FAQ)
        </Typography>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Comment effectuer une réservation ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Pour effectuer une réservation, rendez-vous sur notre page d'accueil et
              entrez vos informations de voyage. Suivez les étapes pour sélectionner
              votre vol et finaliser le processus de réservation.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Quelle est la politique de bagages ?</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Notre politique de bagages varie en fonction de la classe de service et de
              l'itinéraire. Veuillez consulter notre page d'Informations sur les bagages
              pour des informations détaillées sur les franchises de bagages.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3a-content"
            id="panel3a-header"
          >
            <Typography variant="h6">
              Comment puis-je modifier ou annuler ma réservation ?
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography variant="body1">
              Vous pouvez gérer votre réservation en vous connectant à votre compte sur
              notre site web. À partir de là, vous pouvez apporter des modifications à
              votre réservation ou annuler celle-ci selon nos politiques.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>

      <Footer />
    </>
  );
};

export default FAQ;
