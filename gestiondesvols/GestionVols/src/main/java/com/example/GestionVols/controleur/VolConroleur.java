package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.Aeroport;
import com.example.GestionVols.entite.Vol;
import com.example.GestionVols.service.VolService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

public class VolConroleur {
    @RestController
    @RequestMapping("/vols")
    public class VolControleur {
        @Autowired
        private VolService volService;
        // Ajouter un vol
        @PostMapping("/add")
        public Vol addVol(@RequestBody Vol vol) {
            return volService.addVol(vol);
        }
        // Récupérer un vol par ID
        @GetMapping("/{id}")
        public Vol getVolById(@PathVariable int id) {
            return volService.getVolById(id);
        }
        // Récupérer un vol par code IATA
        @GetMapping("/codeIATA/{codeIATA}")
        public Vol getVolByCodeIATA(@PathVariable int codeIATA) {
            return volService.getVolByCodeIATA(codeIATA);
        }
        // Récupérer tous les vols
        @GetMapping("/list")
        public List<Vol> getAllVols() {
            return volService.getAllVols();
        }
        // Supprimer un vol
        @DeleteMapping("/delete/{id}")
        public void deleteVol(@PathVariable int id) {
            volService.deleteVol(id);
        }
        // Annuler un vol
        @PutMapping("/cancel/{id}")
        public Vol cancelVol(@PathVariable int id) {
            return volService.cancelVol(id);
        }
        // Récupérer les vols par aéroport de départ
        @GetMapping("/aeroportDepart/{id}")
        public List<Vol> getVolsByAeroportDepart(@PathVariable int id) {
            Aeroport aeroportDepart = new Aeroport();
            aeroportDepart.setIdAeroport(id);  // Assume you have a constructor/setter to set the ID
            return volService.getVolsByAeroportDepart(aeroportDepart);
        }
        @GetMapping("/aeroportArrivee/{id}")
        public List<Vol> getVolsByAeroportArrivee(@PathVariable int id) {
            Aeroport aeroportArrivee = new Aeroport();
            aeroportArrivee.setIdAeroport(id);  // Same here
            return volService.getVolsByAeroportArrivee(aeroportArrivee);
        }

}
}
