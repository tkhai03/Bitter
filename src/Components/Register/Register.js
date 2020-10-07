import React, {Component} from 'react'
import axios from 'axios'
import './Register.css'
import {Link} from 'react-router-dom'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';

// import {loginUser} from '../../ducks/reducer'

class Register extends Component{
    constructor(props){
        super(props)
        this.state = {
            email:'',
            username: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
        const {email, username, password} = this.state
        axios
        .post('/auth/register', {email, username, password})
        .then((res) => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
        })
        .catch((err) => {
            alert(err.message)
        })
    }

    render(){
        return(
            <div className="Register">
                <SentimentDissatisfiedIcon className='bitterIcon'/>
                <h1 className='topText'>Create your account</h1>
                <div className='inputContainer'>
                    <input className='inputBox' placeholder='Email' name='email' text='text' value={this.state.email} onChange={(e) => {this.handleInput(e)}}/>

                    <input className='inputBox' placeholder='Username' name='username' text='text' value={this.state.username} onChange={(e) => {this.handleInput(e)}}/>

                    <input className='inputBox' placeholder='Password' name='password' text='text' value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                </div>
                <Link to='/dashboard'>
                <button className='registerButton' onClick={ () => {this.handleRegister()}} to='/dashboard'>Register</button>                
                </Link>

            </div>
        )
    }
}

export default Register