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
                    <span className={item.cName}>
                        {item.title}
                    </span>
                </li>
            </Link>
        )
    })

    render(){
        return(
            <div className="NavbarItems">
                <Link to="/dashboard"><h1 className="navbar-logo">Medico</h1></Link>
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.clicked ? 'fas fa-times': 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
                        {this.RenderedMenu}
                </ul>
                <Link to="/"><Button className="navbutton">Sign Out</Button></Link>
            </div>
        )
    }
}

export default Navbar;