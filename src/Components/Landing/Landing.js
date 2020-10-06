import React from 'react'
import './Landing.css'
import bitterLogo from './bitter-chat-background.jpg'


function Landing(){
    return(
        <div className="Landing">
            <div className='grievePoster'>
                <img src={bitterLogo}/>
                <div className='posterText'>
                    <h1 className='posterMsg'>Follow your interests.</h1>
                    <h1 className='posterMsg'>Hear what people are talking about.</h1>
                    <h1 className='posterMsg'>Join the conversation</h1>
                </div>
            </div>
            <div className='auth_container'>
                <div className='loginText'>
                    {/* <h1 className='loginMsg'>See what's happening in the world right now</h1> */}
                </div>
                <div className='button-container'>
                    <button>Sign up</button>
                    <button>Log in</button>
                </div>
            </div>

        </div>
    )
}

export default Landing