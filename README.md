## Create database and table

Create a new database called `myretail` and create the following tables:

```SQL
CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "myretail" (
    "id" SERIAL PRIMARY KEY,
    "firstname" VARCHAR (80) UNIQUE NOT NULL,
    "person_id" INT REFERENCES "person"
);
```

## Start the server

- `npm install`
- `npm run server`
- `npm run client`
