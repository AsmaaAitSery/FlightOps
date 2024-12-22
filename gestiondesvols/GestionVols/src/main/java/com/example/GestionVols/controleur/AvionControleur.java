package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.Avion;
import com.example.GestionVols.service.AvionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/avions")
public class AvionControleur {
    @Autowired
    private AvionService avionService;

    // Ajouter un avion
    @PostMapping("/addAvion")
    public Avion addAvion(@RequestBody Avion avion) {
        return avionService.saveAvion(avion);
    }

    // Mettre à jour un avion
    @PutMapping("/updateAvion")
    public ResponseEntity<Avion> updateAvion(@RequestBody Avion avion) {
        Avion updatedAvion = avionService.updateAvion(avion);
        return ResponseEntity.ok(updatedAvion);
    }

    // Supprimer un avion
    @DeleteMapping("/deleteAvion/{id}")
    public ResponseEntity<Void> deleteAvion(@PathVariable int id) {
        avionService.deleteAvion(id);
        return ResponseEntity.noContent().build();
    }

    // Lister tous les avions
    @GetMapping("/listerAvion")
    public List<Avion> getAllAvions() {
        return avionService.getAllAvions();
    }

    // Récupérer un avion par son ID
    @GetMapping("/{id}")
    public ResponseEntity<Avion> getAvionById(@PathVariable int id) {
        Optional<Avion> avion = avionService.getAvionById(id);
        if (avion.isPresent()) {
            return ResponseEntity.ok(avion.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    // Récupérer un avion par son modèle
    @GetMapping("/modele/{modele}")
    public ResponseEntity<Avion> getAvionByModele(@PathVariable String modele) {
        try {
            Avion avion = avionService.getAvionByModele(modele);
            return ResponseEntity.ok(avion);
        } catch (RuntimeException e) {
            return ResponseEntity.notFound().build();
        }
    }
}
