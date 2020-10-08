import axios from 'axios'
import React, {Component} from 'react'
import './Auth.css'
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import {loginUser} from '../../ducks/reducer'
import {connect} from 'react-redux'

class Auth extends Component{
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        const {email, password} = this.state

        axios
        .post('/auth/login', {email, password})
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
            <div className='Auth'>
                <div className='loginContainer'>
                <SentimentDissatisfiedIcon className='authBitterIcon'/>
                    <h1>Log in to Bitter</h1>
                    <div className='authInputs'>
                        <input className='authEmail' placeholder='Email' name="email" text="text" value={this.state.email} onChange={(e) => {this.handleInput(e)}}/>
                        <input className='authPassword' placeholder='Password' name="password" text="text" value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                    </div>
                    <button className='authLoginButton'onClick={ () => {this.handleLogin()}}>Log in</button>
                </div>
            </div>
        )
    }
}

export default connect(null, {loginUser})(Auth)