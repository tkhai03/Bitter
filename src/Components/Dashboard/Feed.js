import React from 'react'
import GrieveBox from './GrieveBox'
import Post from './Post'
import Count from './Count'

function Feed(props){

        const mappedPosts = props.posts.map((post, index) => {
        return <Post content={post.content} username={post.username} date={post.created_at} key={index} id={post.id} getPosts = {props.getPosts} addLikedPost = {props.addLikedPost} getLikedPosts = {props.getLikedPosts}/>
    })
    return(

        <div className='Feed'>
            <div className='feed_header'>
                <h2>Home</h2>
            </div>
                <GrieveBox getPosts = {props.getPosts}/>
                {mappedPosts}
                
        </div>
    )
}

export default Feed