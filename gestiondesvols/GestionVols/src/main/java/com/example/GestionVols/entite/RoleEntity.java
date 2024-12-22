package com.example.GestionVols.entite;


import com.example.GestionVols.Repository.ERole;
import io.micrometer.observation.annotation.Observed;
import jakarta.persistence.*;
import lombok.Data;

    @Entity
    @Data
    public class RoleEntity {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long id;

        @Enumerated(EnumType.STRING)
        @Column(length = 20)
        private ERole name;

        // Constructeur avec paramètre
        public RoleEntity(ERole name) {
            this.name = name;
        }

        // Constructeur par défaut
        public RoleEntity() {

        }

        public ERole getName() {
            return name;
        }

        public void setName(ERole name) {
            this.name = name;
        }

        public Long getId() {
            return id;
        }

        public void setId(Long id) {
            this.id = id;
        }
    }

