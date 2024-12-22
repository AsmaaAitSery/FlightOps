package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.Aeroport;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface AeroportRepository extends JpaRepository<Aeroport,Integer> {
    List<Aeroport> findAll();

    Aeroport findById(int id);

    List<Aeroport> findByPays(String pays);


    List<Aeroport> findByVille(String ville);

    Aeroport save(Aeroport aeroport);

    Aeroport updateAeroport(Aeroport aeroport);
}
