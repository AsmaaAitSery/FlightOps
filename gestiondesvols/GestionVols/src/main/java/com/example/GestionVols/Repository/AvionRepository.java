package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.Avion;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AvionRepository extends JpaRepository<Avion, Integer> {
    Optional<Avion> findByModele(String modele);
}
