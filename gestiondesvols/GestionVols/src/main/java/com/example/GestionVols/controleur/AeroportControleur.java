package com.example.GestionVols.controleur;

import com.example.GestionVols.entite.Aeroport;
import com.example.GestionVols.service.AeroportService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/aeroport")
public class AeroportControleur {
    @Autowired
    private AeroportService aeroportService;
    @GetMapping("/lister")
    public List<Aeroport> getAllAeroports() {
        return aeroportService.getAllAeroports();
    }
    @GetMapping("/{id}")
    public Aeroport getAeroportById(@PathVariable int id) {
        return aeroportService.getAeroportById(id);
    }
    @GetMapping("/pays/{pays}")
    public List<Aeroport> getAeroportsByPays(@PathVariable String pays) {
        return aeroportService.getAeroportsByPays(pays);
    }
    @GetMapping("/ville/{ville}")
    public List<Aeroport> getAeroportsByVille(@PathVariable String ville) {
        return aeroportService.getAeroportsByVille(ville);
    }
    @PostMapping
    public Aeroport createAeroport(@RequestBody Aeroport aeroport) {
        return aeroportService.saveAeroport(aeroport);
    }
    @PutMapping("/updateaeroport")
    public Aeroport updateAeroport(@RequestBody Aeroport aeroport) {
        aeroportService.updateAeroport(aeroport);
        return aeroport;
    }


}
