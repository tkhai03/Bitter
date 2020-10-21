import React from 'react'

function Widget(props){

    return(

        <div className="Widget">
            <h3 className='likeUser'>@{props.likeUser}</h3>
            <p className='likedPost'>{props.likedContent}</p>
        </div>
    )
}

export default Widget