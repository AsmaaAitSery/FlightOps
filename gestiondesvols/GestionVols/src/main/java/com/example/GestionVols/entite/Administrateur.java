package com.example.GestionVols.entite;

import com.example.GestionVols.Repository.ERole;
import jakarta.persistence.*;

import java.util.Set;

@Entity
@Table(name = "administrateurs")
public class Administrateur {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_Admin;

    @Column(name = "nom_complet", nullable = false)
    private String nomComplet;

    @Column(name = "email", nullable = false)
    private String email;

    @Column(name = "mot_de_passe", nullable = false)
    private String motDePasse;

    @ManyToMany
    @JoinTable(
            name = "administrateur_roles",
            joinColumns = @JoinColumn(name = "administrateur_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<RoleEntity> roles;  // Relation avec RoleEntity
    public Set<RoleEntity> getRoles() {
        return roles;  // Cela doit être une collection valide (Set ou List)
    }



    public String getNomComplet() {
        return nomComplet;
    }

    public int getId_Admin() {
        return id_Admin;
    }

    public void setId_Admin(int id_Admin) {
        this.id_Admin = id_Admin;
    }

    public String getMotDePasse() {
        return motDePasse;
    }

    public void setMotDePasse(String motDePasse) {
        this.motDePasse = motDePasse;
    }


    public void setNomComplet(String nomComplet) {
        this.nomComplet = nomComplet;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setRoles(Set<RoleEntity> roles) {
        this.roles = roles;
    }
}
