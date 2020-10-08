const getPosts = async(db) => {
    const posts = await db.get_posts()
    return posts
}

module.exports = {
    getPosts: async(req, res) => {},
    addPost: async(req, res) => {},
    editPost: async(req, res) => {},
    deletePost: async(req, res) => {},
    followingPosts: async(req,res) => {}
}