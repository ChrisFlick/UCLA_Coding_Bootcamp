DROP DATABASE IF EXISTS new_db;
CREATE DATABASE new_db;

USE new_db;

CREATE TABLE new_table (
	id INTEGER AUTO_INCREMENT NOT NULL,
    row1 INTEGER,
    row2 VARCHAR(30),
    PRIMARY KEY (ID)
);

INSERT INTO new_table (row1, row2) VALUES (7, 'Hello World');
INSERT INTO new_table (row1, row2) VALUES (8, 'Still here!');
INSERT INTO new_table (row1, row2) VALUES (66, 'Goodbye World');
