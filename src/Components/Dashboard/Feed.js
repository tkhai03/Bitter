import React from 'react'
import './Feed.css'
import GrieveBox from './GrieveBox'
import Widgets from './Widgets'

function Feed(){
    return(
        <div className='Feed'>
            <div className='feed_header'>
                <h2>Home</h2>
            </div>
                <GrieveBox/>
        </div>
    )
}

export default Feed