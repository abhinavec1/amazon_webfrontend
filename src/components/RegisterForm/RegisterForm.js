import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import './RegisterForm.css'

class RegisterForm extends React.Component{

    //form = document.getElementById('Login-form');
    //form.addEventListener()

    handleSubmit = async(e) => {
        e.preventDefault()
        let firstname = document.getElementById('firstname').value
        let lastname = document.getElementById('lastname').value
        let email = document.getElementById('email').value
        let pass = document.getElementById('password').value
        let phonenum = document.getElementById('mobilenum').value
        let latitude = document.getElementById('latitude').value
        let longitude = document.getElementById('longitude').value
        try{
            const response  = await axios.post('http://13.233.69.75:8000/shop/register-store/', {
                    "first_name" : firstname,
                    "last_name": lastname,
                    "email": email,
                    "password":pass,
                    "phoneNum" : phonenum,
                    "latitude": latitude,
                    "longitude": longitude,
            })
        alert(response.data)
        }
        catch(err){
            console.log(err)
        }
    }

    render(){
        return (
            <>
            <div class='container-fluid'>
  		<div class='row'>
  			<div class="register-custom">
  				<div class='card'>
  					<div class='card-body'>
  						<h4 class='card-title'>REGISTER ACCOUNT</h4>
  						<br />
  						<form method='POST' action='' onSubmit={this.handleSubmit}>
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-user"></i></span><input type='text' id='firstname' placeholder='First name' /></div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-user"></i></span><input type='text' id='lastname' placeholder='Last name' />
                  				</div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-envelope-square"></i></span><input type='email' id='email' placeholder='Email' /></div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-key"></i></span><input type='Password' id='password' placeholder='Password' /></div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-mobile"></i></span><input type='text' id='mobilenum' placeholder='Mobile Number' /></div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-map-marker"></i></span><input type='text' id='latitude' placeholder='Latitude' /></div>
  							</div>
  							<br />
  							<div class='input-group'>
  								<div class='input-group-prepend'><span class='input-group-text'><i class="fas fa-map-marker"></i></span><input type='text' id='longitude' placeholder='Longitude' /></div>
  							</div>
  							<br />
							<button class='btn btn-primary' type='submit' >Register</button>

  						</form>
  						<br />
						<p style={{'color':'black', 'fontWeight': 'lighter', 'fontSize': '15px'}}>Already have an account? <Link to="/" style={{'textDecoration': 'none', 'color':'white'}}>Login</Link></p>
					</div>
  				</div>
  			</div>
  		</div>
  	</div>
            </>
        )
    }
}

export default RegisterForm