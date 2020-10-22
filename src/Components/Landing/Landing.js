import React, {useState} from 'react'
import './Landing.css'
import bitterLogo from './bitter-chat-background.jpg'
import {Link} from 'react-router-dom'
import Register from '../Register/Register'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';


function Landing() {
    const [register, setRegister] = useState(false)
    // const [hidden, setHidden] = useState(false)

    return (
        <div className="Landing">
            <img className='bitterLogo'src={bitterLogo} alt='logo' />
            <div className='posterText'>
                <h1 className='posterMsg'>Follow your interests.</h1>
                <h1 className='posterMsg'>Hear what people are talking about.</h1>
                <h1 className='posterMsg'>Join the conversation</h1>
            </div>
            <div className='auth_container'>
                <SentimentDissatisfiedIcon className='landing_bitterIcon'/>
                <div className='loginText'>
                    <h1 className='loginMsg'>See what's happening in the world right now</h1>
                </div>
                <div className='button-container'>

                    <button className='button1' onClick= {() => setRegister(true)}>Sign up</button>

                    <Link to='/auth'>
                    <button className='button2'>Log in</button>                  
                    </Link>
                </div>
            </div>

            {register ? <Register/> : null}

        </div>
    )
}

export default Landing