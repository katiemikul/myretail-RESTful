CREATE DATABASE passport_intro;

CREATE TABLE "person" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "pet" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "person_id" INT REFERENCES "person"
);

-- NEED TO HAVE A REGISTERED USER (at 1) FOR THIS TO WORK
INSERT INTO pet ("firstname", "person_id") VALUES ('ibis', 1);