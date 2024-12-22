package com.example.GestionVols.service;

import com.example.GestionVols.Repository.AvionRepository;
import com.example.GestionVols.entite.Avion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AvionService {
    private final AvionRepository avionRepository;

    @Autowired
    public AvionService(AvionRepository avionRepository) {
        this.avionRepository = avionRepository;
    }

    // Méthode pour enregistrer un avion
    public Avion saveAvion(Avion avion) {
        return avionRepository.save(avion);
    }

    // Méthode pour mettre à jour un avion existant
    public Avion updateAvion(Avion avion) {
        return avionRepository.save(avion);
    }

    // Méthode pour supprimer un avion par son ID
    public void deleteAvion(int id) {
        avionRepository.deleteById(id);
    }

    // Méthode pour récupérer tous les avions
    public List<Avion> getAllAvions() {
        return (List<Avion>) avionRepository.findAll();
    }

    // Méthode pour récupérer un avion par son ID
    public Optional<Avion> getAvionById(int id) {
        return avionRepository.findById(id);
    }

    // Méthode pour récupérer un avion par son modèle
    public Avion getAvionByModele(String modele) {
        return avionRepository.findByModele(modele)
                .orElseThrow(() -> new RuntimeException("Avion avec le modèle " + modele + " introuvable."));
    }
}
