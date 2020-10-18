-- INSERT INTO users
-- (email, username, password)
-- VALUES ($1, $2, $3)
-- returning id, username;

-- SELECT like_text FROM likes
-- WHERE like_id = $1;

INSERT INTO likes
 (user_id, post_id)
 VALUES ($1, $2)