INSERT INTO posts
(users_id, content, created_at)
VALUES ($1, $2, NOW())
returning *;

/*now = date and time through sql*/