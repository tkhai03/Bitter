SELECT p.content, p.created_at, u.username, p.id
FROM posts p
JOIN users u ON u.id = p.users_id;


/*look at users table, look at the user_id value at every post. if there is a matching value in the users table specifically in the id column, include in the select*/