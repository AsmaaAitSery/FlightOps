CREATE DATABASE VOLS ,


CREATE TABLE administrateurs (
    id_admin INT PRIMARY KEY NOT NULL,
    nom_complet VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    mot_de_passe VARCHAR(255) NOT NULL,
);
CREATE TABLE membres_equipe (
    id_membre INT PRIMARY KEY NOT NULL,
    nom_complet VARCHAR(100) NOT NULL,
    fonction VARCHAR(50),
    numero_licence VARCHAR(50),
    nationalite VARCHAR(50)
);

CREATE TABLE aeroports (
    id_aeroport INT PRIMARY KEY NOT NULL,
    code_IATA VARCHAR(3) NOT NULL,
    nom VARCHAR(100) NOT NULL,
    pays VARCHAR(100) NOT NULL,
    ville VARCHAR(100) NOT NULL,
    capacite INT
);

CREATE TABLE avions (
    id_avion INT PRIMARY KEY NOT NULL,
    type VARCHAR(50),
    capacite INT,
    annee_fabrication INT,
    modele VARCHAR(50)
);

CREATE TABLE reservations (
    id_reservation INT PRIMARY KEY NOT NULL,
    nombre_passagers INT,
    lieu_depart VARCHAR(100),
    destination VARCHAR(100),
    date_depart DATE,
    date_reservation TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    statut_reservation VARCHAR(20),
    id_vol INT,
    FOREIGN KEY (id_vol) REFERENCES vols(id_vol)
);

CREATE TABLE reservations_passagers (
    id_reservation INT,
    id_passager INT,
    PRIMARY KEY (id_reservation, id_passager),
    FOREIGN KEY (id_reservation) REFERENCES reservations(id_reservation),
    FOREIGN KEY (id_passager) REFERENCES passagers(id_passager)
);

CREATE TABLE vols (
    id_vol INT PRIMARY KEY NOT NULL,
    id_avion INT,
    id_aeroport_depart INT,
    id_aeroport_arrivee INT,
    date_depart DATETIME,
    date_arrivee DATETIME,
    statut VARCHAR(20),
    prix_vol DECIMAL(10, 2),
    FOREIGN KEY (id_avion) REFERENCES avions(id_avion),
    FOREIGN KEY (id_aeroport_depart) REFERENCES aeroports(id_aeroport),
    FOREIGN KEY (id_aeroport_arrivee) REFERENCES aeroports(id_aeroport)
);

CREATE TABLE passagers (
    id_passager INT PRIMARY KEY NOT NULL,
    nom VARCHAR(50),
    prenom VARCHAR(50),
    date_naissance DATE,
    adresse VARCHAR(255),
    num_telephone VARCHAR(20),
    genre CHAR(1)
);