import React from 'react'
import './Feed.css'
import GrieveBox from './GrieveBox'
import Post from './Post'


function Feed(props){

        const mappedPosts = props.posts.map((post, index) => {
        return <Post content={post.content} username={post.username} date={post.created_at} key={index} date={post.created_at} />
    })
    return(

        <div className='Feed'>
            <div className='feed_header'>
                <h2>Home</h2>
            </div>
                <GrieveBox/>
                {mappedPosts}
                
        </div>
    )
}

export default Feed