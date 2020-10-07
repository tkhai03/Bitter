import axios from 'axios'
import React, {Component} from 'react'
import './Auth.css'

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
            <div>
                <input placeholder='Email' name="email" text="text" value={this.state.email} onChange={(e) => {this.handleInput(e)}}/>
                <input placeholder='Password' name="password" text="text" value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                <button onClick={ () => {this.handleLogin()}}>Log in</button>
            </div>
        )
    }
}

export default Auth