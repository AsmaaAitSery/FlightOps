package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.service.PassagerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/passagers")
public class PassagerControleur {
    @Autowired
    private PassagerService passagerService;
    // Ajouter un passager
    @PostMapping("/addpassagers")
    public Passager addPassager(@RequestBody Passager passager) {
        return passagerService.addPassager(passager);
    }
    // Supprimer un passager par ID
    @DeleteMapping("/deletePassagers/{id}")
    public void deletePassager(@PathVariable int id) {
        passagerService.deletePassager(id);
    }
    @GetMapping("/list")
    public List<Passager> getAllPassagers() {
        return passagerService.getAllPassagers();
    }
    @GetMapping("/{id}")
    public Passager getPassagerById(@PathVariable int id) {
        return passagerService.getPassagerById(id);
    }
    // Authentifier un passager

}
