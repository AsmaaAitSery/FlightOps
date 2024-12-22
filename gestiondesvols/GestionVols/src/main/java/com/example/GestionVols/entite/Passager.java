package com.example.GestionVols.entite;

import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "passagers")
public class Passager {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idPassager;

    @Column(name = "nom", nullable = false)
    private String nom;
    @Column(name = "mot_de_passe", nullable = false)
    private String motDePasse;

    @Column(name = "prenom", nullable = false)
    private String prenom;

    @Column(name = "date_naissance", nullable = false)
    private String dateNaissance;

    @Column(name = "adresse")
    private String adresse;

    @Column(name = "num_telephone")
    private String numTelephone;
    @Column(name = "nationalité")
    private String nationalite;
    @Column(name = "numeroPasseport")
    private int numeroPasseport;

    @ManyToMany
    @JoinTable(
            name = "passager_roles",
            joinColumns = @JoinColumn(name = "passager_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<RoleEntity> roles;  // Relation avec RoleEntity
    public int getNumeroPasseport() {
        return numeroPasseport;
    }

    public void setNumeroPasseport(int numeroPasseport) {
        this.numeroPasseport = numeroPasseport;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }

    @Column(name = "genre")
    private char genre;

    public int getIdPassager() {
        return idPassager;
    }

    public void setIdPassager(int idPassager) {
        this.idPassager = idPassager;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getDateNaissance() {
        return dateNaissance;
    }

    public void setDateNaissance(String dateNaissance) {
        this.dateNaissance = dateNaissance;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public char getGenre() {
        return genre;
    }

    public void setGenre(char genre) {
        this.genre = genre;
    }

    public String getNumTelephone() {
        return numTelephone;
    }

    public void setNumTelephone(String numTelephone) {
        this.numTelephone = numTelephone;
    }
    @ManyToOne
    @JoinColumn(name = "reservation_id")
    private Reservation reservation;

    public Reservation getReservation() {
        return reservation;
    }

    public void setReservation(Reservation reservation) {
        this.reservation = reservation;
    }

    public Set<RoleEntity> getRoles() {
        return roles;
    }

    public void setRoles(Set<RoleEntity> roles) {
        this.roles = roles;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }
}
