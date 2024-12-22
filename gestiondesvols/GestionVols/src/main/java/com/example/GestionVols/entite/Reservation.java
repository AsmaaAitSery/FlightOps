package com.example.GestionVols.entite;

import jakarta.persistence.*;

import java.util.List;

@Entity
@Table(name = "reservations")
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idReservation;

    @Column(name = "nombre_passagers", nullable = false)
    private int nombrePassagers;

    @Column(name = "lieu_depart", nullable = false)
    private String lieuDepart;

    @Column(name = "destination", nullable = false)
    private String destination;

    @Column(name = "date_depart", nullable = false)
    private String dateDepart;

    @Column(name = "date_reservation")
    private String dateReservation;

    @Column(name = "statut_reservation")
    private String statutReservation;

    @ManyToOne
    @JoinColumn(name = "id_vol", foreignKey = @ForeignKey(name = "FK_vol"))
    private Vol vol;

    // Relation One-to-Many avec Passager
    @OneToMany(mappedBy = "reservation")
    private List<Passager> passagers;

    // Getters et Setters

    public int getIdReservation() {
        return idReservation;
    }

    public void setIdReservation(int idReservation) {
        this.idReservation = idReservation;
    }

    public int getNombrePassagers() {
        return nombrePassagers;
    }

    public void setNombrePassagers(int nombrePassagers) {
        this.nombrePassagers = nombrePassagers;
    }

    public String getLieuDepart() {
        return lieuDepart;
    }

    public void setLieuDepart(String lieuDepart) {
        this.lieuDepart = lieuDepart;
    }

    public String getDestination() {
        return destination;
    }

    public void setDestination(String destination) {
        this.destination = destination;
    }

    public String getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(String dateDepart) {
        this.dateDepart = dateDepart;
    }

    public String getStatutReservation() {
        return statutReservation;
    }

    public void setStatutReservation(String statutReservation) {
        this.statutReservation = statutReservation;
    }

    public String getDateReservation() {
        return dateReservation;
    }

    public void setDateReservation(String dateReservation) {
        this.dateReservation = dateReservation;
    }

    public Vol getVol() {
        return vol;
    }

    public void setVol(Vol vol) {
        this.vol = vol;
    }

    public List<Passager> getPassagers() {
        return passagers;
    }

    public void setPassagers(List<Passager> passagers) {
        this.passagers = passagers;
    }
}