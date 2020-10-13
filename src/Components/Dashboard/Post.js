import Axios from 'axios'
import React,{useState, useEffect} from 'react'
import './Post.css'
import axios from 'axios'

function Post(props) {
    const { date, content, username } = props
    // const [content, editContent] = useState('')

    // const editPost = () => {
    //     axios.
    // }

    return (
        <div className='Post'>
            <div className='postContent'>
                <h3>@{username}</h3>
                <p>{content}</p>
                {/* {date} */}
            </div>
            <button>Edit</button>
        </div>
    )
}

export default Post