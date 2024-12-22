package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.RoleEntity;

import java.util.Optional;

public interface RoleRepository {
    Optional<RoleEntity> findByName(ERole name); // Trouver un rôle par son nom
    boolean existsByName(ERole name); // Vérifier si un rôle existe par son nom
}
