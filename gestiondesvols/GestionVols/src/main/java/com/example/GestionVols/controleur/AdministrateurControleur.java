package com.example.GestionVols.controleur;


import com.example.GestionVols.entite.Administrateur;
import com.example.GestionVols.service.AdministrateurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/administrateur")
public class AdministrateurControleur {
    @Autowired
    private AdministrateurService adminService;
    @DeleteMapping("/delete/{id}")
    public String deleteAdministrateur(@PathVariable int id) {
        adminService.deleteAdministrateur(id);
        return "Administrateur supprimé.";
    }
    @PutMapping("/update")
    public Administrateur updateAdministrateur(@RequestBody Administrateur administrateur) {
        adminService.updateAdministrateur(administrateur);
        return administrateur;
    }


}
