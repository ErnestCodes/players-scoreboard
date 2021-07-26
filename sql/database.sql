CREATE DATABASE scoreboard;

CREATE TABLE scoredata(
    id BIGSERIAL NOT NULL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    point VARCHAR(255) NOT NULL
);

-- To connect to a database
-- \c dbname