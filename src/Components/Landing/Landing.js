import React from 'react'
import './Landing.css'
import bitterLogo from './bitter-chat-background.jpg'
import {Link} from 'react-router-dom'


function Landing() {
    return (
        <div className="Landing">
            <img className='bitterLogo'src={bitterLogo} alt='logo' />
            <div className='posterText'>
                <h1 className='posterMsg'>Follow your interests.</h1>
                <h1 className='posterMsg'>Hear what people are talking about.</h1>
                <h1 className='posterMsg'>Join the conversation</h1>
            </div>
            <div className='auth_container'>
                <div className='loginText'>
                    <h1 className='loginMsg'>See what's happening in the world right now</h1>
                </div>
                <div className='button-container'>
                    <Link to='/register'>
                    <button className='button1'>Sign up</button>
                    </Link>
                    <Link to='/auth'>
                    <button className='button2'>Log in</button>                  
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Landing