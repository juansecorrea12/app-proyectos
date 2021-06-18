CREATE DATABASE app_proyectos;

CREATE TABLE users(
    id INT(11) NOT NULL,
    email VARCHAR(22) NOT NULL,
    password VARCHAR(60) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL
);

ALTER TABLE users
    ADD PRIMARY KEY (id);

ALTER TABLE users 
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;

DESCRIBE users;

CREATE TABLE projects(
    id INT(11) NOT NULL,
    nombre VARCHAR(22) NOT NULL,
    descripcion VARCHAR(100) NOT NULL,
    tiempo_ejecucion INT(12) NOT NULL, 
    operador VARCHAR(40) NOT NULL,
    user_id INT(11),
    created_at timestamp NOT NULL default current_timestamp,
    CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id)
);

ALTER TABLE projects
    ADD PRIMARY KEY (id);

ALTER TABLE projects
    MODIFY id INT(11) NOT NULL AUTO_INCREMENT;