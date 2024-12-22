package com.example.GestionVols.service;
import java.util.Optional;
import org.springframework.security.core.userdetails.UsernameNotFoundException;


import com.example.GestionVols.entite.Administrateur;
import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.Repository.AdministrateurRepository;
import com.example.GestionVols.Repository.PassagerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private AdministrateurRepository administrateurRepository;

    @Autowired
    private PassagerRepository passagerRepository;

    @Override
    @Transactional
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        // On vérifie d'abord si l'utilisateur est un administrateur
        Administrateur administrateur = administrateurRepository.findByEmail(username)
                .orElse(null);

        if (administrateur != null) {
            return UserDetailsImpl.buildFromAdmin(administrateur);  // Utilise les détails de l'Administrateur
        }

        // Si ce n'est pas un administrateur, on cherche un passager
        Passager passager = passagerRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User Not Found with email: " + username));

        return UserDetailsImpl.buildFromPassager(passager);  // Utilise les détails du Passager
    }
}
