import React, { useState} from 'react'
import axios from 'axios'
import FavoriteIcon from '@material-ui/icons/Favorite';
import {Button} from '@material-ui/core'


function Post(props) {
    const { content, username, id } = props
    const [editContent, setEditContent] = useState(content)
    const [edit, setEdit] = useState(false)
 
    

    const editPost = () => {
        axios.put(`/api/posts/${id}`, { editContent })
            .then((res) => {
                props.getPosts()
                setEdit(false)
            })
    }

    const deletePost = () => {
        axios.delete(`/api/posts/${id}`)
        .then((res) => {
            props.getPosts()
            props.getLikedPosts()

        })
    }

    return (
        <div>
            {!edit ?
                <div className='Post'>
                    <Button className='likeButton' onClick={() => props.addLikedPost(id)}><FavoriteIcon/></Button>
                    <div className='postContent'>
                        <h3>@{username}</h3>
                        <p>{content}</p>
                        {/* {date} */}
                    <button className = 'postButton' onClick={() => setEdit(true)}>Edit</button>
                    <button className = 'postButton' onClick={() => deletePost()}>Delete</button>
                    </div>
                </div> :
                <div className='Post'>
                    <input className='editInput' type='text' value={editContent} onChange={(e) => setEditContent(e.target.value)} />
                    <button className='postEdit' onClick={() => editPost()}>Save</button>

                </div>}
        </div>
    )
}

export default Post