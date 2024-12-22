package com.example.GestionVols.entite;

import jakarta.persistence.*;

@Entity
@Table(name = "avions")
public class Avion {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAvion;

    @Column(name = "type")
    private String type;

    @Column(name = "capacite")
    private int capacite;

    @Column(name = "annee_fabrication")
    private int anneeFabrication;

    @Column(name = "modele")
    private String modele;

    // Getters et Setters

    public int getIdAvion() {
        return idAvion;
    }

    public void setIdAvion(int idAvion) {
        this.idAvion = idAvion;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }

    public int getAnneeFabrication() {
        return anneeFabrication;
    }

    public void setAnneeFabrication(int anneeFabrication) {
        this.anneeFabrication = anneeFabrication;
    }

    public String getModele() {
        return modele;
    }

    public void setModele(String modele) {
        this.modele = modele;
    }
}
