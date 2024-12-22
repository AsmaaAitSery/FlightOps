package com.example.GestionVols.service;
import com.example.GestionVols.entite.Administrateur;
import com.example.GestionVols.entite.Passager;
import com.example.GestionVols.entite.RoleEntity;
import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.Collection;
import java.util.Collections;
import java.util.HashSet;
import java.util.Set;

public class UserDetailsImpl implements UserDetails {

    @Getter
    private Long id;  // Changement en Long pour correspondre à l'ID des administrateurs
    private String username; // email pour Administrateur ou nom pour Passager
    private String password; // motDePasse pour Administrateur
    private Collection<? extends GrantedAuthority> authorities;

    public UserDetailsImpl(Long id, String username, String password, Collection<? extends GrantedAuthority> authorities) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.authorities = authorities;
    }

    // Méthode pour créer un UserDetailsImpl à partir de l'entité Administrateur
    public static UserDetailsImpl buildFromAdmin(Administrateur admin) {
        Set<GrantedAuthority> authorities = new HashSet<>();

        // Ajouter chaque rôle de l'administrateur à la collection d'autorités
        for (RoleEntity role : admin.getRoles()) {
            authorities.add(new SimpleGrantedAuthority("ROLE_" + role.getName().name()));  // Préfixe "ROLE_"
        }

        return new UserDetailsImpl(
                (long) admin.getId_Admin(),
                admin.getEmail(),
                admin.getMotDePasse(),
                authorities  // Liste des rôles de l'administrateur
        );
    }

    // Méthode pour créer un UserDetailsImpl à partir de l'entité Passager
    public static UserDetailsImpl buildFromPassager(Passager passager) {
        SimpleGrantedAuthority authority = new SimpleGrantedAuthority("ROLE_PASSAGER");
        return new UserDetailsImpl(
                (long) passager.getIdPassager(),
                passager.getNom(),
                null, // Pas de mot de passe pour les passagers
                Collections.singletonList(authority)
        );
    }

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return authorities;
    }

    @Override
    public String getPassword() {
        return password;
    }

    @Override
    public String getUsername() {
        return username;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }

    public Object getId() {
        return id ;
    }
}

