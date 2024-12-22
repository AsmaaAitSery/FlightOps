import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import Header from "../components/Header";
import Footer from "../components/Footer";
import backgroundImage from "../pic.jpg";
import { styled } from "@mui/material/styles";

const About = () => {
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
    zIndex: -1,
  });

  return (
    <Box position="relative">
      <BackgroundImageContainer />
      <StyledContainer maxWidth="md">
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item>
            <Typography style={{ fontSize: 60, color: "#123456" }}>
              À propos de nous {/* Traduction */}
            </Typography>
          </Grid>
          <Grid item>
            <Typography
              style={{ fontSize: "2.5rem", fontWeight: "bold" }}
              gutterBottom
            >
              Bienvenue chez Amalis Fly {/* Nouveau nom */}
            </Typography>
            <Typography
              style={{ fontSize: "1.5rem", fontStyle: "italic" }}
              gutterBottom
            >
              Votre partenaire aérien de confiance {/* Traduction */}
            </Typography>
          </Grid>
        </Grid>

        <StyledPaper>
          <Typography style={{ fontSize: "1.2rem" }}>
            Amalis Fly est une compagnie aérienne de premier plan dans
            l'industrie, dédiée à offrir des expériences de vol de qualité
            supérieure à nos passagers. Avec un engagement envers la sécurité, le
            confort et un service exceptionnel, nous sillonnons les cieux depuis
            plus d'une décennie.
          </Typography>
          <Typography style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            Notre flotte se compose d'appareils modernes et fiables, garantissant
            que votre voyage avec nous soit fluide et agréable. Que vous voyagiez
            pour affaires ou pour le loisir, nous avons ce qu'il vous faut.
          </Typography>
          <Typography style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            Chez Amalis Fly, nous croyons qu'il est important de rendre les
            voyages aériens accessibles à tous. Nos prix compétitifs et nos
            options de réservation flexibles rendent plus facile que jamais
            l'exploration de nouveaux horizons.
          </Typography>
          <Typography style={{ fontSize: "1.2rem", marginTop: "1rem" }}>
            Merci de choisir Amalis Fly pour vos besoins de voyage. Nous avons
            hâte de vous servir lors de votre prochaine aventure.
          </Typography>
        </StyledPaper>
      </StyledContainer>
      <Footer />
    </Box>
  );
};

export default About;
