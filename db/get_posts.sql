SELECT * FROM posts p
JOIN users u ON p.users_id = u.id;

/*look at users table, look at the user_id value at every post. if there is a matching value in the users table specifically in the id column, include in the select*/