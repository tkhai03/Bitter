import React from 'react'
import './Post.css'

function Post(props) {
    const { created_at, content, username } = props
    return (
        <div className='Post'>
            <div className='postContent'>
                <h3>{username}</h3>
                <p>{content}</p>
            </div>
        </div>
    )
}

export default Post