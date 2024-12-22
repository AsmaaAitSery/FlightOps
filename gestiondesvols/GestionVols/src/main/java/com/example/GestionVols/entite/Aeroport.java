package com.example.GestionVols.entite;

import jakarta.persistence.*;

@Entity
@Table(name = "aeroports")
public class Aeroport {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idAeroport;

    @Column(name = "code_IATA", nullable = false)
    private String codeIATA;

    @Column(name = "nom", nullable = false)
    private String nom;

    @Column(name = "pays", nullable = false)
    private String pays;

    @Column(name = "ville", nullable = false)
    private String ville;

    @Column(name = "capacite")
    private int capacite;

    public int getIdAeroport() {
        return idAeroport;
    }

    public void setIdAeroport(int idAeroport) {
        this.idAeroport = idAeroport;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getCodeIATA() {
        return codeIATA;
    }

    public void setCodeIATA(String codeIATA) {
        this.codeIATA = codeIATA;
    }

    public String getPays() {
        return pays;
    }

    public void setPays(String pays) {
        this.pays = pays;
    }

    public String getVille() {
        return ville;
    }

    public void setVille(String ville) {
        this.ville = ville;
    }

    public int getCapacite() {
        return capacite;
    }

    public void setCapacite(int capacite) {
        this.capacite = capacite;
    }
}
