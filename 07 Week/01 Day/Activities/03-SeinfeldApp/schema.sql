DROP DATABASE IF EXISTS seinfeld_db;
CREATE DATABASE seinfeld_db;

USE seinfeld_db;

CREATE TABLE actors (
	id INTEGER AUTO_INCREMENT NOT NULL,
    name VARCHAR(30) NOT NULL,
    coolness INTEGER NOT NULL,
    attitude VARCHAR(30) NOT NULL,
    PRIMARY KEY(id)
);

INSERT INTO actors (name, coolness, attitude) VALUES ('Jerry Seinfeld', 10, 'cool');
INSERT INTO actors (name, coolness, attitude) VALUES ('Kramer', 4, 'doofus');
INSERT INTO actors (name, coolness, attitude) VALUES ('George', 5, 'witty');
INSERT INTO actors (name, coolness, attitude) VALUES ('Elaine', 8, 'attitude');
