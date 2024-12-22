package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.entite.Reservation;
import com.example.GestionVols.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/reservations")
public class ReservationControleur {
    @Autowired
    private ReservationService reservationService;

    // Ajouter une réservation
    @PostMapping("/add")
    public ResponseEntity<Reservation> ajouterReservation(@RequestBody Reservation reservation) {
        Reservation nouvelleReservation = reservationService.ajouterReservation(reservation);
        return new ResponseEntity<>(nouvelleReservation, HttpStatus.CREATED);
    }

    // Ajouter un passager à une réservation
    @PostMapping("/{idReservation}/passagers")
    public ResponseEntity<Reservation> ajouterPassager(@PathVariable int idReservation, @RequestBody Passager passager) {
        Reservation reservation = reservationService.ajouterPassager(idReservation, passager);
        if (reservation != null) {
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Confirmer une réservation
    @PutMapping("/{idReservation}/confirmer")
    public ResponseEntity<Reservation> confirmerReservation(@PathVariable int idReservation) {
        Reservation reservation = reservationService.confirmerReservation(idReservation);
        if (reservation != null) {
            return new ResponseEntity<>(reservation, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    // Supprimer une réservation
    @DeleteMapping("/{idReservation}")
    public ResponseEntity<Void> supprimerReservation(@PathVariable int idReservation) {
        reservationService.supprimerReservation(idReservation);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    // Lister toutes les réservations
    @GetMapping
    public ResponseEntity<List<Reservation>> listerReservations() {
        List<Reservation> reservations = reservationService.listerReservations();
        return new ResponseEntity<>(reservations, HttpStatus.OK);
    }
}
