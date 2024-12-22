package com.example.GestionVols.controleur;

import com.example.GestionVols.Repository.AdministrateurRepository;
import com.example.GestionVols.Repository.ERole;
import com.example.GestionVols.Repository.PassagerRepository;
import com.example.GestionVols.Repository.RoleRepository;
import com.example.GestionVols.entite.Administrateur;
import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.entite.RoleEntity;
import com.example.GestionVols.response.JwtResponse;
import com.example.GestionVols.response.MessageResponse;
import com.example.GestionVols.securiteconfig.JwtUtilis;
import com.example.GestionVols.service.UserDetailsImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.HashSet;
import java.util.Set;

public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    AdministrateurRepository administrateurRepository;

    @Autowired
    PassagerRepository passagerRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtilis jwtUtils;

    // Méthode pour l'authentification (login)
    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginDetails loginDetails) {
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginDetails.getUsername(), loginDetails.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        String jwt = jwtUtils.generateJwtToken(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
        Set<String> roles = new HashSet<>();
        userDetails.getAuthorities().forEach(authority -> roles.add(authority.getAuthority()));

        return ResponseEntity.ok(new JwtResponse(jwt, (Long) userDetails.getId(), userDetails.getUsername(), roles));
    }

    // Méthode pour l'inscription (signup)
    @PostMapping("/signup")
    public ResponseEntity<?> registerUser(@RequestBody RegisterDetails registerDetails) {
        // Vérifier si l'email ou le nom existe déjà
        if (administrateurRepository.existsByEmail(registerDetails.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Email is already taken for an Admin!"));
        }

        if (passagerRepository.existsByNom(registerDetails.getUsername())) {
            return ResponseEntity.badRequest().body(new MessageResponse("Error: Username is already taken for a Passager!"));
        }

        // Création d'un nouvel administrateur ou passager selon le cas
        if ("admin".equals(registerDetails.getRole())) {
            // Enregistrer un Administrateur
            Administrateur admin = new Administrateur();
            admin.setEmail(registerDetails.getUsername());
            admin.setMotDePasse(encoder.encode(registerDetails.getPassword()));

            RoleEntity adminRole = roleRepository.findByName(ERole.ROLE_ADMIN)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            admin.setRoles(Set.of(adminRole));

            administrateurRepository.save(admin);
        } else {
            // Enregistrer un Passager
            Passager passager = new Passager();
            passager.setNom(registerDetails.getUsername());
            passager.setMotDePasse(encoder.encode(registerDetails.getPassword()));

            RoleEntity passagerRole = roleRepository.findByName(ERole.ROLE_PASSAGER)
                    .orElseThrow(() -> new RuntimeException("Error: Role is not found."));
            passager.setRoles(Set.of(passagerRole));

            passagerRepository.save(passager);
        }

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }

    // Classe interne pour LoginDetails
    public static class LoginDetails {
        private String username;
        private String password;

        // Getters et Setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    // Classe interne pour RegisterDetails
    public static class RegisterDetails {
        private String username;
        private String password;
        private String role; // "admin" ou "passager"

        // Getters et Setters
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }

        public String getRole() {
            return role;
        }

        public void setRole(String role) {
            this.role = role;
        }
    }

}
