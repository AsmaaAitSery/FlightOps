package com.example.GestionVols.service;

import com.example.GestionVols.Repository.MembreEquipeRepository;
import com.example.GestionVols.entite.MembreEquipe;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MembreEquipeService {
    @Autowired
    private MembreEquipeRepository membreEquipeRepository;
    public MembreEquipe addMembreEquipe(MembreEquipe membreEquipe) {
        return membreEquipeRepository.save(membreEquipe);
    }

    public void deleteMembreEquipe(int id) {
        membreEquipeRepository.deleteById(id);
    }

    public List<MembreEquipe> getAllMembresEquipe() {
        return membreEquipeRepository.findAll();
    }

    public MembreEquipe getMembreEquipeById(int id) {
        return membreEquipeRepository.findById(id).orElse(null);
    }
}
