package com.example.GestionVols.entite;

import jakarta.persistence.*;

@Entity
@Table(name = "vols")
public class Vol {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int idVol;


    @ManyToOne
    @JoinColumn(name = "id_avion", foreignKey = @ForeignKey(name = "FK_avion"))
    private Avion avion;

    @ManyToOne
    @JoinColumn(name = "id_aeroport_depart", foreignKey = @ForeignKey(name = "FK_aeroport_depart"))
    private Aeroport aeroportDepart;

    @ManyToOne
    @JoinColumn(name = "id_aeroport_arrivee", foreignKey = @ForeignKey(name = "FK_aeroport_arrivee"))
    private Aeroport aeroportArrivee;

    @Column(name = "codeIATA")
    private int codeIATA;

    @Column(name = "date_depart")
    private String dateDepart;

    @Column(name = "date_arrivee")
    private String dateArrivee;

    @Column(name = "statut")
    private String statut;

    @Column(name = "prix_vol")
    private double prixVol;

    public Avion getAvion() {
        return avion;
    }

    public void setAvion(Avion avion) {
        this.avion = avion;
    }

    public Aeroport getAeroportDepart() {
        return aeroportDepart;
    }

    public void setAeroportDepart(Aeroport aeroportDepart) {
        this.aeroportDepart = aeroportDepart;
    }

    public int getIdVol() {
        return idVol;
    }

    public void setIdVol(int idVol) {
        this.idVol = idVol;
    }

    public Aeroport getAeroportArrivee() {
        return aeroportArrivee;
    }

    public void setAeroportArrivee(Aeroport aeroportArrivee) {
        this.aeroportArrivee = aeroportArrivee;
    }

    public int getCodeIATA() {
        return codeIATA;
    }

    public void setCodeIATA(int codeIATA) {
        this.codeIATA = codeIATA;
    }

    public String getDateDepart() {
        return dateDepart;
    }

    public void setDateDepart(String dateDepart) {
        this.dateDepart = dateDepart;
    }

    public String getDateArrivee() {
        return dateArrivee;
    }

    public void setDateArrivee(String dateArrivee) {
        this.dateArrivee = dateArrivee;
    }

    public String getStatut() {
        return statut;
    }

    public void setStatut(String statut) {
        this.statut = statut;
    }

    public double getPrixVol() {
        return prixVol;
    }

    public void setPrixVol(double prixVol) {
        this.prixVol = prixVol;
    }
}
