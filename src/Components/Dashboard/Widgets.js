import React from 'react'
import Widget from './Widget'
import '../styles/styles.css'

function Widgets(props) {

    const mappedLikes = props.likes.map((like, index) => {
        return <Widget key={index} likedContent={like.content} likeUser={like.username} />
    })


    return (
        <div className='Widgets'>
            <div className='widgetContainer'>
                <div className='widgetFeed'>
                {mappedLikes}
                </div>
            </div>
        </div>
    )
}

export default Widgets