import React, { useState, useEffect } from 'react'
import './Post.css'
import axios from 'axios'

function Post(props) {
    const { date, content, username, id } = props
    const [editContent, setEditContent] = useState(content)
    const [edit, setEdit] = useState(false)
    

    const editPost = () => {
        axios.put(`/api/posts/${id}`, { editContent })
            .then((res) => {
                setEdit(false)
            })
    }

    const deletePost = () => {
        axios.delete(`/api/posts/${id}`)
        .then((res) => {

        })
    }

    return (
        <div>
            {!edit ?
                <div className='Post'>
                    <div className='postContent'>
                        <h3>@{username}</h3>
                        <p>{content}</p>
                        {/* {date} */}
                    </div>
                    <button onClick={() => setEdit(true)}>Edit</button>
                    <button onClick={() => deletePost()}>Delete</button>
                </div> :
                <div className='Post'>
                    <input type='text' value={editContent} onChange={(e) => setEditContent(e.target.value)} />
                    <button onClick={() => editPost()}>Save Changes</button>

                </div>}
        </div>
    )
}

export default Post