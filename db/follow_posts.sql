SELECT * FROM posts
WHERE users_id in
(SELECT following_id from following
WHERE follower_id = $1)