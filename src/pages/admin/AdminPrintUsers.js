import React, { useEffect, useState } from "react";
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from "@mui/material";
import axios from "axios";

const PrintUsers = () => {
  const [users, setUsers] = useState([]); // État pour les utilisateurs

  useEffect(() => {
    // Récupérer tous les utilisateurs lorsque le composant est monté
    axios
      .get("http://localhost:8080/api/users")
      .then((response) => {
        setUsers(response.data); // Mettre à jour l'état avec les utilisateurs récupérés
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération des utilisateurs :", error); // Gérer l'erreur si nécessaire
      });
  }, []); // Tableau de dépendances vide signifie que cet effet s'exécute une seule fois lorsque le composant est monté

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 4 }}>
        Utilisateurs inscrits
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Nom d'utilisateur</TableCell>
              <TableCell>Prénom</TableCell>
              <TableCell>Nom</TableCell>
              <TableCell>Email</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.firstName}</TableCell>
                <TableCell>{user.lastName}</TableCell>
                <TableCell>{user.email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default PrintUsers;
