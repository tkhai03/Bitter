DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS following;

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

CREATE TABLE following(
    follower_id int references users(id),
    following_id int references users(id),
    connection_id serial primary key  
);