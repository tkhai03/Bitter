DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS posts;
DROP TABLE IF EXISTS following;

CREATE TABLE users(
    id serial primary key,
    email varchar(100),
    username varchar(50),
    password text
);

Create Table if not exists posts (
    id serial primary key,
    users_id int references users(id),
    content varchar(250),
    created_at date
);

CREATE TABLE likes(
    id SERIAL PRIMARY KEY,
    post_id INT REFERENCES posts(id)
    user_id INT REFERENCES users(id)
    
);

