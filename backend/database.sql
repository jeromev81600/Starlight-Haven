-- Active: 1686646788987@@127.0.0.1@3306@starbdd
-- MySQL Script generated by MySQL Workbench

-- Thu Jun 15 10:14:09 2023

-- Model: New Model    Version: 1.0

-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=1;
-- -----------------------------------------------------
-- Schema starbdd
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `starbdd` DEFAULT CHARACTER SET utf8 ;
USE `starbdd` ;

-- -----------------------------------------------------
-- Table `starbdd`.`backpack`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`backpack` (
  `id` INT NOT NULL AUTO_INCREMENT,
   `type` VARCHAR(100) NULL,
  `volumemin` INT NOT NULL,
  `volumemax` INT NOT NULL,	
  `weight`VARCHAR(45) NULL,
  `payload` INT NULL,
  `description` LONGTEXT NULL,
  `url` VARCHAR(250) NULL,	
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO
    `starbdd`.`backpack` (type,volumemin,volumemax,weight,payload,description,url)
VALUES ('Sac à dos de journée (Daypack)',10,30,"0,5 à 1,5 kg",10,"Compartiments multiples, poches extérieures, système de suspension léger, système d'hydratation intégré.",""), ('Sac à dos de randonnée (Backpacking)',40,70,"1,5 à 3,5 kg",20,"Système de suspension ajustable, sangles de compression, housse de pluie intégrée, accès frontal ou par le dessus, poches latérales en filet pour les bouteilles d'eau.",""), ('Sac à dos de trekking technique (Technical Trekking)',50,80,"2 à 4 kg",25,"Points d'attache pour équipement technique, boucles pour piolets et crampons, poches à fermeture éclair sur la ceinture lombaire pour un accès rapide à de petits objets.",""), ('Sac à dos de trek léger (Ultralight Trekking)',30,50,"0,8 à 1,5 kg",15,"Matériaux ultralégers, design minimaliste, système de portage simplifié, pas de fonctionnalités superflues pour réduire le poids total.",""), ('Sac à dos pour trekking en hiver (Winter Trekking)',50,80,"2 à 4 kg",25,"Sangles pour transporter des skis ou des raquettes à neige, poches pour les outils de neige, système de portage renforcé pour supporter des charges supplémentaires.",""), ('Sac à dos pour trekking féminin',40,70,"1,5 à 3 kg",20," Les sacs à dos pour femmes sont conçus pour mieux s'adapter à l'anatomie féminine, avec des bretelles plus étroites et un ajustement spécifique au niveau de la ceinture lombaire.",''), ('Sac à dos pour trekking enfant',10,25," 0,8 à 1,5 kg",5,"Les sacs à dos pour enfants sont conçus pour être plus légers et adaptés à leur taille, afin de rendre la randonnée plus agréable et confortable pour les plus jeunes.",'');


-- -----------------------------------------------------
-- Table `starbdd`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`user` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `firstname` VARCHAR(45) NOT NULL,
  `lastname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `phone` VARCHAR(15) NULL,
   `preferences` LONGTEXT NULL,
  `hashed_password` VARCHAR(255) NOT NULL,
  `admin_credentials` TINYINT NOT NULL DEFAULT 0,
  `backpack_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_user_backpack1`
    FOREIGN KEY (`backpack_id`)
    REFERENCES `starbdd`.`backpack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `starbdd`.`user` (firstname, lastname, email, phone, preferences, hashed_password, admin_credentials, backpack_id)
VALUES ("Jérôme", "Vilanova", "jerome.vilanova@gmail.com", "+33123456787", "Randonnées de haute-montagne et trekking", "$argon2id$v=19$m=65536,t=3,p=1$Fc2fOTj3AF7U9epqu9AXfw$/os0n2Y", 1, 3);


-- -----------------------------------------------------
-- Table `starbdd`.`bivouac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`bivouac` (
  `id` INT NOT NULL AUTO_INCREMENT,
 `type` VARCHAR(200) NOT NULL,
  `location` VARCHAR(200) NOT NULL,
  `OptimalWeatherConditions` VARCHAR(200) NOT NULL,
  `description` VARCHAR(45) NULL,
  `url` VARCHAR(250) NULL,
  `optimal_periods` VARCHAR(200) NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;

INSERT INTO `starbdd`.`bivouac` (type, location, OptimalWeatherConditions, description,url, optimal_periods)
VALUES
    ('Classique', 'Montagnes de Chamonix', 'Ensoleillé et clair', 'Bivouac classique dans les Alpes','', 'Juillet - Août'),
    ('Refuge', 'Refuge du Goûter', 'Partiellement nuageux avec ciel dégagé prévu', 'Bivouac en refuge avant l\'ascension','', 'Juin - Septembre'),
    ('Hamac', 'Forêt de Fontainebleau', 'Ensoleillé avec légère brise', 'Bivouac en hamac dans la forêt','', 'Mai - Septembre'),
    ('Altitude', 'Montagnes des Pyrénées', 'Ciel dégagé avec températures douces', 'Bivouac d\'altitude','', 'Juillet - Septembre'),
    ('Tarp', 'Sentier du PCT', 'Ensoleillé avec températures modérées', 'Bivouac en tarp sur le Pacific Crest Trail','', 'Juin - Octobre'),
    ('Igloo', 'Sommet du Mont Blanc', 'Ciel dégagé avec températures froides', 'Bivouac en igloo','', 'Septembre - Novembre'),
    ('Belle étoile', 'Plage de Biarritz', 'Ensoleillé avec brise marine rafraîchissante', 'Bivouac en sac de couchage à la belle étoile','', 'Juin - Août'),
    ('Sous roche', 'Forêt de Brocéliande', 'Partiellement nuageux avec éclaircies', 'Bivouac sous roche légendaire','', 'Avril - Octobre');


-- -----------------------------------------------------
-- Table `starbdd`.`equipment`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`equipment` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `equipmentname` VARCHAR(200) NOT NULL,
  `weight` INT NOT NULL,
  `volume` INT NOT NULL,
  `user_id` INT NOT NULL,
  `type` VARCHAR(100) NULL,
  `url` VARCHAR(250) NULL,
  `description` LONGTEXT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_equipment_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `starbdd`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `starbdd`.`equipment` (equipmentname, weight, volume, user_id, type,url, description)
VALUES 
    ('Tente légère', 2.5, 4, 1, 'Tente','', 'Une tente légère et compacte pour vous abriter pendant la nuit.'),
    ('Sac de couchage adapté', 1.8, 8, 1, 'Sac de couchage','', 'Un sac de couchage adapté aux conditions climatiques du lieu de trekking.'),
    ('Matelas de sol léger', 0.5, 3, 1, 'Matelas','', 'Pour isoler et protéger votre corps du sol froid et dur.'),
    ('Réchaud de camping', 0.3, 1, 1, 'Réchaud','', 'Pour cuisiner vos repas en plein air.'),
    ('Casserole ou popote', 0.5, 1, 1, 'Cuisine','','Pour préparer et chauffer vos aliments et boissons.'),
    ('Ustensiles de cuisine légers', 0.2, 0.5, 1, 'Cuisine','', 'Une cuillère, une fourchette et un couteau de camping légers.'),
    ('Lampe frontale ou lampe de poche', 0.3, 0.5, 1, 'Éclairage','', 'Pour l éclairage la nuit et dans les endroits sombres.'),
    ('Couteau de poche multifonctions', 0.1, 0.3, 1, 'Outils','', 'Un couteau de poche avec plusieurs fonctions pour différentes tâches.'),
    ('Aliments déshydratés et collations', 2, 3, 1, 'Nourriture','', 'Des aliments légers et déshydratés pour les repas et les collations en trekking.'),
    ('Eau potable', 2, 2, 1, 'Boisson','', 'Environ 2 litres d eau par jour pour rester hydraté pendant le trekking.'),
    ('Vêtements et sous-vêtements', 5, 8, 1, 'Vêtements','', 'Des vêtements adaptés aux conditions climatiques, y compris des couches supplémentaires pour les nuits fraîches.'),
    ('Articles de toilette et trousse de premiers soins', 1, 1.5, 1, 'Toilette','', 'Des articles de toilette essentiels et une trousse de premiers soins pour les petites blessures.'),
    ('Carte et boussole', 0.2, 0.5, 1, 'Navigation','', 'Une carte topographique de la région et une boussole pour la navigation en cas de perte de signal GPS.'),
    ('Sacs étanches ou sacs de compression', 0.5, 5, 1, 'Organisation','', 'Pour garder vos affaires au sec et organiser votre équipement dans le sac à dos.');

-- -----------------------------------------------------
-- Table `starbdd`.`user_has_bivouac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`user_has_bivouac` (
  `user_id` INT NOT NULL AUTO_INCREMENT,
  `bivouac_id` INT NOT NULL,
  CONSTRAINT `fk_user_has_bivouac_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `starbdd`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_has_bivouac_bivouac1`
    FOREIGN KEY (`bivouac_id`)
    REFERENCES `starbdd`.`bivouac` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO
    `starbdd`.`user_has_bivouac` (user_id,bivouac_id)
VALUES (1,3);

-- -----------------------------------------------------
-- Table `starbdd`.`backpack_has_bivouac`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `starbdd`.`backpack_has_bivouac` (
  `backpack_id` INT NOT NULL,
  `bivouac_id` INT NOT NULL,
  CONSTRAINT `fk_backpack_has_bivouac_backpack1`
    FOREIGN KEY (`backpack_id`)
    REFERENCES `starbdd`.`backpack` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_backpack_has_bivouac_bivouac1`
    FOREIGN KEY (`bivouac_id`)
    REFERENCES `starbdd`.`bivouac` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;

INSERT INTO `starbdd`.`backpack_has_bivouac` (backpack_id, bivouac_id)
VALUES (1, 1), (1, 2),(1, 5), (2, 2), (2, 3),(2, 5),(2, 7),(2, 8), (3, 4),(4,1), (4, 5), (5, 4), (5, 6), (6, 2),(6,3),(6,5), (6, 7) ,(6,8),(7,1);
  

SET SQL_MODE=Traditional;
