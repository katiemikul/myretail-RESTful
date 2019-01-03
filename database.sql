CREATE DATABASE myretail;

CREATE TABLE "users"(
	"id" SERIAL PRIMARY KEY,
	"username" VARCHAR(80) NOT NULL,
	"password" VARCHAR(120) NOT NULL);

CREATE TABLE "products"(
	"id" SERIAL PRIMARY KEY,
	"product description" VARCHAR(80) NOT NULL,
	"cost" VARCHAR(10) NOT NULL);