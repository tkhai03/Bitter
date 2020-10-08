DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;

CREATE TABLE users(
    id serial primary key,
    email varchar(100),
    username varchar(50),
    password text
);

create table if not exists posts (
    id serial primary key,
    users_id int references users(id),
    content varchar(250),
    created_at date
);