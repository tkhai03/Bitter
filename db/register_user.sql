INSERT INTO users
(email, username, password)
VALUES ($1, $2, $3)
returning id, username;