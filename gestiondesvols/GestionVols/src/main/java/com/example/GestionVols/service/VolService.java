package com.example.GestionVols.service;

import com.example.GestionVols.Repository.VolRepository;
import com.example.GestionVols.entite.Aeroport;
import com.example.GestionVols.entite.Vol;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class VolService {
    @Autowired
    private VolRepository volRepository;
    public Vol addVol(Vol vol) {
        return volRepository.save(vol);
    }
    // Récupérer un vol par ID
    public Vol getVolById(int id) {
        return volRepository.findById(id).orElse(null);
    }

    public List<Vol> getAllVols() {
        return volRepository.findAll();
    }

    public void deleteVol(int id) {

        volRepository.deleteById(id);
    }
    // Annuler un vol (changer le statut)
    public Vol cancelVol(int id) {

        Vol vol = volRepository.findById(id).orElse(null);
        if (vol != null) {
            vol.setStatut("Annulé");
            return volRepository.save(vol);
        }
        return null;

    }

    public List<Vol> getVolsByAeroportDepart(Aeroport aeroportDepart) {
        return volRepository.findByAeroportDepart(aeroportDepart);
    }

    public List<Vol> getVolsByAeroportArrivee(Aeroport aeroportArrivee) {
        return volRepository.findByAeroportArrivee(aeroportArrivee);
    }

    public Vol getVolByCodeIATA(int codeIATA) {
        return volRepository.findByCodeIATA(codeIATA).orElse(null);
    }
}
