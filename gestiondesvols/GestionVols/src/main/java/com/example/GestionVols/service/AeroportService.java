package com.example.GestionVols.service;

import com.example.GestionVols.Repository.AeroportRepository;
import com.example.GestionVols.entite.Aeroport;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AeroportService {
    @Autowired
    private AeroportRepository aeroportRepository;
    public List<Aeroport> getAllAeroports() {
        return aeroportRepository.findAll();
    }

    public Aeroport getAeroportById(int id) {
        return aeroportRepository.findById(id);

    }

    public List<Aeroport> getAeroportsByPays(String pays) {
        return aeroportRepository.findByPays(pays);
    }

    public List<Aeroport> getAeroportsByVille(String ville) {
        return aeroportRepository.findByVille(ville);

    }

    public Aeroport saveAeroport(Aeroport aeroport) {
        return aeroportRepository.save(aeroport);

    }

    public void updateAeroport(Aeroport aeroport) {
        aeroportRepository.updateAeroport(aeroport);
    }
}
