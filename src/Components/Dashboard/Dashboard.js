import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { getUser, loginUser, logoutUser } from '../../ducks/reducer'
import { withRouter } from 'react-router-dom'
import axios from 'axios'
import Post from './Post'
import Sidebar from './Sidebar'
import Feed from './Feed'
import Widgets from './Widgets'
import './Dashboard.css';



function Dashboard(props) {
    const [posts, setPosts] = useState([])
    // const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (!props.isLoggedIn) {
            axios.get('/auth/getUser')
                .then(res => props.loginUser(res.data))
                .catch(err => console.log(err))
            axios.get('/api/posts')
                .then((res) => setPosts(res.data))
        }
    }, [])

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

    return (
        <div className='bigDashboard'>
            <div className='Dashboard'>
                    <Sidebar />
                    <Feed posts={posts}/>
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