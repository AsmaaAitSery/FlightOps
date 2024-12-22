package com.example.GestionVols.Repository;

import com.example.GestionVols.entite.Aeroport;
import com.example.GestionVols.entite.Vol;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface VolRepository extends JpaRepository<Vol,Integer> {
    Optional<Vol> findByCodeIATA(int codeIATA);


    List<Vol> findByAeroportDepart(Aeroport aeroportDepart);

    List<Vol> findByAeroportArrivee(Aeroport aeroportArrivee);
}
