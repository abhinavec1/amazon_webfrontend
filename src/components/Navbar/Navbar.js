import React from 'react'
import MenuItems from './MenuItems'
import Button from '../Button'
import {Link} from 'react-router-dom'

import './Navbar.css'

class Navbar extends React.Component{
    state = {clicked: false}

    handleClick = () => {
        this.setState({clicked: !this.state.clicked})
    }

    RenderedMenu = MenuItems.map((item, index) => {
        return(
            <Link key={index} to={`${item.url}`}>
                <li>
                    <a className={item.cName}>
                        {item.title}
                    </a>
                </li>
            </Link>
        )
    })

    render(){
        return(
            <div className="NavbarItems">
                <h1 className="navbar-logo">Your App Name</h1>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {this.RenderedMenu}
                </ul>
                <Button>Sign Up</Button>
            </div>
        )
    }
}

export default Navbar;