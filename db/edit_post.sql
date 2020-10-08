UPDATE posts
SET content = $1
WHERE id = $2
returning *;

/*only content can change
without WHERE, it would change every post*/