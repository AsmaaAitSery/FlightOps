package com.example.GestionVols.service;

import com.example.GestionVols.Repository.PassagerRepository;
import com.example.GestionVols.entite.Passager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PassagerService {
    @Autowired
    private PassagerRepository passagerRepository;


    public Passager addPassager(Passager passager) {
        return passagerRepository.save(passager);
    }

    public void deletePassager(int id) {
        passagerRepository.deleteById(id);
    }

    public List<Passager> getAllPassagers() {
        return passagerRepository.findAll();
    }

    public Passager getPassagerById(int id) {
        return passagerRepository.findById(id).orElse(null);
    }

    public boolean authenticatePassager(String nom, String prenom) {
        Optional<Passager> passager = passagerRepository.findByNomAndPrenom(nom, prenom);
        return passager.isPresent();
    }
}
