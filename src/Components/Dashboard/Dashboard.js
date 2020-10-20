import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUser, loginUser, logoutUser } from '../../ducks/reducer'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'



function Dashboard(props) {
    const [posts, setPosts] = useState([])
    const [likes, setLikes] = useState([])
    // const [getLiked, setgetLiked] = useState([])

    const addLikedPost = (post_id) => {
        axios.post(`/api/likes/${post_id}`)
        .then((res) => {
            getLikedPosts()
            
        })
    }

    const getLikedPosts = () => {
        axios.get('/api/likes')
        .then((res) => {
            setLikes(res.data)
        })
    }


    useEffect(() => {
        getPosts()
        getLikedPosts()
    }, [])

    const getPosts = () => {
        if (!props.isLoggedIn) {
            axios.get('/auth/getUser')
                .then(res => props.loginUser(res.data))
                .catch(err => console.log(err))
            axios.get('/api/posts')
                .then((res) => {setPosts(res.data) 
                    console.log(res.data)})
        }
    }

    const logout = () => {
        axios.delete('/auth/logout')
            .then(() => {
                props.logoutUser()
                props.history.push('/')
            })
    }
    // const mappedPosts = posts.map((post, index) => {
    //     return <Post content={post.content} key={index} date={post.created_at} />
    // })
console.log(likes)
    return (
        <div className='bigDashboard'>
            <div className='Dashboard'>
                    <Sidebar />
                    <Feed posts={posts} getPosts = {getPosts} addLikedPost = {addLikedPost}/>
                    <Widgets />
                    <button onClick={logout} className='dashLogout'>Log Out</button>
            </div>
        </div>
    )
}

function mapStatetoProps(state) {
    return state
}

export default connect(mapStatetoProps, { getUser, loginUser, logoutUser })(withRouter(Dashboard)) 