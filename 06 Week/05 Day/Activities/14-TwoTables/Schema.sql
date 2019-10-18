DROP DATABASE IF EXISTS top_songsDB;
CREATE DATABASE top_songsDB;

USE top_songsDB;

CREATE TABLE top5000 (
    id INTEGER AUTO_INCREMENT NOT NULL,
    position INTEGER NOT NULL,
    artist VARCHAR(30) NOT NULL,
    song VARCHAR(30) NOT NULL,
    year INTEGER NOT NULL,
    world INTEGER,
    us INTEGER,
    uk INTEGER,
    eu INTEGER,
    rest INTEGER,
    PRIMARY KEY (id)
);

CREATE TABLE topAlbums (
	id INTEGER AUTO_INCREMENT NOT NULL,
    position INTEGER NOT NULL,
	artist VARCHAR(30) NOT NULL,
    title VARCHAR(30) NOT NULL,
    year INTEGER NOT NULL,
    world INTEGER,
    us INTEGER,
    uk INTEGER,
    eu INTEGER,
    rest INTEGER,
    PRIMARY KEY (id)
);


