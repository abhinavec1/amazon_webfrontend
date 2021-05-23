import React from 'react'
import './RequestItem.css'
import Modal from '../Modal/Modal'

class RequestItem extends React.Component{
    state = {isDisplayed: false}

    handleClick = () => {
        this.setState({isDisplayed: true})
    }

    onClose = () => {
        this.setState({isDisplayed: false})
    }

    render(){
        const {userName, medName, medQnty, orderDate, orderTime} = this.props
        return(
            <div>
                <div className="outer">
                    <div className="order">
                        <span className="name bar_item"><i className="fas fa-user"></i> <span>{userName}</span></span>
                        <span className="medicine_name bar_item"><i className="fas fa-prescription-bottle-alt"></i> {medName}</span>
                        <span className="quantity bar_item"><i className="fas fa-cubes"></i> {medQnty}</span>
                        <span className="date bar_item"><i className="far fa-calendar-alt"></i><span> {orderDate}</span></span>
                        <span className="time bar_item"><i className="fas fa-clock"></i><span> {orderTime}</span></span>
                        <span className="more bar_item"><button onClick={this.handleClick}>Details</button></span>
                        <Modal isDisplayed={this.state.isDisplayed} userName={userName} medName={medName} medQnty={medQnty} orderDate={orderDate} orderTime={orderTime} onClose={this.onClose}/>
                    </div>
                </div>
            </div>
        )
    }
} 

export default RequestItem