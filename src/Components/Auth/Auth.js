import React, {Component} from 'react'

class Auth extends Component{
    constructor(){
        super()
        this.state = {
            username: '',
            password: '',
        }
    }

    handleInput = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleLogin = (e) => {
        const {username, password} = this.state
    }

    render(){
        return(
            <div>
                <input placeholder='Username' name="username" text="text" value={this.state.username} onChange={(e) => {this.handleInput(e)}}/>
                <input placeholder='Password' name="password" text="text" value={this.state.password} onChange={(e) => {this.handleInput(e)}}/>
                <button onClick={ () => {this.handleLogin()}}>Log in</button>

            </div>
        )
    }
}

export default Auth