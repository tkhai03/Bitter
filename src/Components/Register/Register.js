import React, {Component} from 'react'
import axios from 'axios'
import './Register.css'
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
                <input placeholder='Email' name='email' text='text' value={this.state.email} onChange={(e) => {this.handleInput(e)}}/>
                <input placeholder='Username' name='username' text='text' value={this.state.username} onChange={(e) => {this.handleInput(e)}}/>
                <input placeholder='Password' name='password' text='text' value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                <button onClick={ () => {this.handleRegister()}} to='/dashboard'>Register</button>

            </div>
        )
    }
}

export default Register