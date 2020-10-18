
SELECT p.content, u.username
FROM users u
JOIN likes l ON u.id = l.user_id
JOIN posts p ON p.id = l.post_id;