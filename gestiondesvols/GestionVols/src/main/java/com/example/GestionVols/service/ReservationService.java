package com.example.GestionVols.service;

import com.example.GestionVols.Repository.ReservationRepository;
import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.entite.Reservation;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;
import java.util.Optional;

public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;

    // Ajouter une nouvelle réservation
    public Reservation ajouterReservation(Reservation reservation) {
        return reservationRepository.save(reservation);
    }

    // Ajouter un passager à une réservation
    public Reservation ajouterPassager(int idReservation, Passager passager) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(idReservation);
        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            reservation.getPassagers().add(passager);
            return reservationRepository.save(reservation);
        }
        return null;
    }

    // Confirmer une réservation
    public Reservation confirmerReservation(int idReservation) {
        Optional<Reservation> reservationOptional = reservationRepository.findById(idReservation);
        if (reservationOptional.isPresent()) {
            Reservation reservation = reservationOptional.get();
            reservation.setStatutReservation("Confirmée");
            return reservationRepository.save(reservation);
        }
        return null;
    }

    // Supprimer une réservation
    public void supprimerReservation(int idReservation) {
        reservationRepository.deleteById(idReservation);
    }

    // Lister toutes les réservations
    public List<Reservation> listerReservations() {
        return reservationRepository.findAll();
    }
}
