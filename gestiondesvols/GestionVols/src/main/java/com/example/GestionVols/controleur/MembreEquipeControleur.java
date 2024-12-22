package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.MembreEquipe;
import com.example.GestionVols.service.MembreEquipeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/membres-equipe")
public class MembreEquipeControleur {
    @Autowired
    private MembreEquipeService membreEquipeService;
    // Ajouter un membre d'équipe
    @PostMapping("/addMembreequipe")
    public MembreEquipe addMembreEquipe(@RequestBody MembreEquipe membreEquipe) {
        return membreEquipeService.addMembreEquipe(membreEquipe);
    }
    // Supprimer un membre d'équipe par ID
    @DeleteMapping("/deleteMembreEquipe/{id}")
    public void deleteMembreEquipe(@PathVariable int id) {
        membreEquipeService.deleteMembreEquipe(id);
    }
    // Récupérer tous les membres d'équipe
    @GetMapping("/list")
    public List<MembreEquipe> getAllMembresEquipe() {
        return membreEquipeService.getAllMembresEquipe();
    }
    // Récupérer un membre d'équipe par ID
    @GetMapping("/{id}")
    public MembreEquipe getMembreEquipeById(@PathVariable int id) {
        return membreEquipeService.getMembreEquipeById(id);
    }

}
