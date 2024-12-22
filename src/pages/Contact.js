import React from "react";
import { Container, Typography, Box, Grid, Link, Paper } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Contact = () => {
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "30px" }}>
        <Typography variant="h4" gutterBottom>
          Contactez-nous
        </Typography>
        <Paper style={{ padding: "20px" }}>
          <Typography variant="h6" gutterBottom>
            Informations de contact
          </Typography>
          <Typography variant="body1" gutterBottom>
            Pour toute demande ou assistance, vous pouvez nous joindre par
            email ou par téléphone :
          </Typography>
          <Typography variant="body1">
            <strong>Email :</strong>{" "}
            <Link href="mailto:info@crowsnestairways.com">
              info@amalisfly.com
            </Link>
          </Typography>
          <Typography variant="body1">
            <strong>Téléphone :</strong> + (212) 456-7890
          </Typography>
        </Paper>
      </Container>

      <Footer />
    </>
  );
};

export default Contact;
