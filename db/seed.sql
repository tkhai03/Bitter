DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id serial primary key,
    email varchar(100),
    username varchar(50),
    password int
);