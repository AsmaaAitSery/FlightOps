package com.example.GestionVols.entite;

import jakarta.persistence.*;

@Entity
@Table(name = "membres_equipe")
public class MembreEquipe {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idMembre;

    @Column(name = "nom_complet", nullable = false)
    private String nomComplet;

    @Column(name = "fonction")
    private String fonction;

    @Column(name = "numero_licence")
    private String numeroLicence;

    @Column(name = "nationalite")
    private String nationalite;

    public String getNomComplet() {
        return nomComplet;
    }

    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public int getIdMembre() {
        return idMembre;
    }

    public void setIdMembre(int idMembre) {
        this.idMembre = idMembre;
    }

    public String getFonction() {
        return fonction;
    }

    public void setFonction(String fonction) {
        this.fonction = fonction;
    }

    public String getNumeroLicence() {
        return numeroLicence;
    }

    public void setNumeroLicence(String numeroLicence) {
        this.numeroLicence = numeroLicence;
    }

    public String getNationalite() {
        return nationalite;
    }

    public void setNationalite(String nationalite) {
        this.nationalite = nationalite;
    }
}
