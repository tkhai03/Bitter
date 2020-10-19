const getAllPosts = async (db) => {
    const posts = await db.get_posts()
    return posts
}

module.exports = {
    getPosts: async (req, res) => {
        const db = req.app.get('db')
        const posts = await db.get_posts()
        res.status(200).send(posts)
    },
    addPost: async (req, res) => {
        const db = req.app.get('db')
        const { id } = req.session.user
        const { content } = req.body

        await db.add_post([id, content])


        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    },
    editPost: async (req, res) => {
        const db = req.app.get('db')
        const { editContent } = req.body
        const { post_id } = req.params

        await db.edit_post([editContent, post_id])

        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    },
    deletePost: async (req, res) => {
        const db = req.app.get('db')
        const { post_id } = req.params

        await db.delete_post([post_id])

        const posts = await getAllPosts(db)
        res.status(200).send(posts)
    },
    likePosts: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const {post_id} = req.params
        
        const likes = await db.like_posts([id, post_id])
        res.status(200).send(likes)

    },
    getLikedPosts: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.session.user
        const likes = await db.get_liked_posts(id)
        res.status(200).send(likes)
    }
}