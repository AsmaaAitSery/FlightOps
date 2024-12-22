package com.example.GestionVols.service;
import com.example.GestionVols.Repository.AdministrateurRepository;
import com.example.GestionVols.entite.Administrateur;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdministrateurService {
    @Autowired
    AdministrateurRepository adminRepository;

    public Administrateur saveAdministrateur (Administrateur administrateur){
        adminRepository.save(administrateur);
        return administrateur;
    }
    public boolean authentifierAdministrateur(String email , String motDePasse){
        Administrateur admin = adminRepository.findByEmailAndMotDePasse(email, motDePasse);
        return admin != null;
    }
    public void deleteAdministrateur(int id) {
        adminRepository.deleteById(id);
    }
    public void updateAdministrateur(Administrateur administrateur){
        //public void updateAdministrateur(Administrateur administrateur){
        //adminRepository.updateAdministrateur(administrateur);

    }
}
