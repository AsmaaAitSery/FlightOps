package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.Passager;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface PassagerRepository extends JpaRepository<Passager,Integer> {
    Optional<Passager> findByNomAndPrenom(String nom, String prenom);

    Optional<Passager> findByEmail(String email);

    boolean existsByNom(String username);
}
