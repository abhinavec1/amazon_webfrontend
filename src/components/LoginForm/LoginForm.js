import React from 'react'
import './LoginForm.css'
import axios from 'axios'
import { Redirect, Link } from "react-router-dom";

class LoginForm extends React.Component{
    const = [{}]
    state = {username:"", password:""}

    handleUsername = (e) => {
        this.setState({username: e.target.value})
    }

    handlePassword = (e) => {
        this.setState({password: e.target.value})
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://127.0.0.1:8000/customer/login/', {
                username: this.state.username,
                password: this.state.password
            })
            if (response.status === 200){
                console.log(this.state.username)
                this.props.setUser(this.state.username)
            }

        }
        catch(err){
            alert('Invalid Credentials')
        }
    }

    render(){
        return (
            <>
            {this.props.currUser === -1? null : <Redirect to="/dashboard" />}
            <div class='container-fluid'>
                <div class='row'>
                    <div class="login-custom">
                        <div class='card'>
                            <div class='card-body'>
                                <p style={{'padding':'5px', 'borderRadius': '4px', 'backgroundColor':'orange'}}>MEDICO</p>
                                <br />
                                <form>
                                    <div class='input-group'>
                                        <div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-envelope-square"></i></span><input value={this.state.username} type='text' name='username' placeholder='Email' onChange={(e) => this.handleUsername(e)}/></div>
                                    </div>
                                    <br />
                                    <div class='input-group'>
                                        <div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-key"></i></span><input value={this.state.password} type='password' name="password" placeholder='Password' onChange={(e) => this.handlePassword(e)}/></div>
                                    </div>
                                    <br />
                                    <input class='btn btn-primary' type='submit' value='Login' onClick={(e) => this.handleSubmit(e)}/>

                                </form>
                                <br />
                                <p style={{'color':'black','fontWeight': 'lighter','fontSize': '15px'}}>Don't have an account? <Link to='/register' style={{'textDecoration': 'none', 'color':'white'}}>Register</Link></p>
                                <p style={{'color':'black','fontWeight': 'lighter','fontSize': '15px'}}>Forgot Password? <a href="/" style={{'textDecoration': 'none', 'color':'white'}}>Reset password</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default LoginForm