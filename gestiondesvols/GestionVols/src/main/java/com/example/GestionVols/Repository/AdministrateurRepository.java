package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.Administrateur;
import com.example.GestionVols.entite.Passager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;


public interface AdministrateurRepository extends JpaRepository<Administrateur,Integer> {
    Administrateur findByEmailAndMotDePasse(String email, String motDePasse);
    Optional<Administrateur> findByEmail(String username);

    boolean existsByEmail(String username);


    //  void updateAdministrateur(Administrateur administrateur);
}
