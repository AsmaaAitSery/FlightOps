package com.example.GestionVols.response;

import java.util.Set;

public class JwtResponse {
    private String token;
    private String type = "Bearer";
    private Long id;  // L'ID de l'utilisateur (Administrateur ou Passager)
    private String username;  // Nom d'utilisateur (email pour Admin ou nom pour Passager)
    private Set<String> roles;  // Rôles de l'utilisateur

    // Constructeur
    public JwtResponse(String accessToken, Long id, String username, Set<String> roles) {
        this.token = accessToken;
        this.id = id;
        this.username = username;
        this.roles = roles;
    }

}
