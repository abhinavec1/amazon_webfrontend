import React from 'react'
import './RequestItem.css'
import Modal from '../Modal/Modal'
import axios from 'axios'

class RequestItem extends React.Component{
    state = {isDisplayed: false, result: {customer: {user: { email: ''}, phoneNum: ''}}}

    handleClick = async(requestId) => {
        try {
            const response  = await axios.get(`http://172.31.35.88:8000/shop/item-detail/${requestId}/`) // Replace 9 with the item id
            this.setState({result: response.data, isDisplayed: true})
        }
        catch(err){
            console.log(err)
        }
    }

    onClose = () => {
        this.setState({isDisplayed: false})
    }

    render(){
        const {userName, medName, medQnty, orderDate, orderTime, requestId, flag, setFlag} = this.props
        return(
            <div>
                <div className="outer">
                    <div className="order">
                        <span className="name bar_item"><i className="fas fa-user"></i> <span>{userName}</span></span>
                        <span className="medicine_name bar_item"><i className="fas fa-prescription-bottle-alt"></i> {medName}</span>
                        <span className="quantity bar_item"><i className="fas fa-cubes"></i> {medQnty}</span>
                        <span className="date bar_item"><i className="far fa-calendar-alt"></i><span> {orderDate}</span></span>
                        <span className="time bar_item"><i className="fas fa-clock"></i><span> {orderTime}</span></span>
                        <span className="bar_item"><button className="btn btn-primary" onClick={() => {this.handleClick(requestId)}}>Details</button></span>
                        <Modal isDisplayed={this.state.isDisplayed} flag={flag} setFlag={setFlag} requestId={requestId} userName={userName} medName={medName} medQnty={medQnty} orderDate={orderDate} orderTime={orderTime} email={this.state.result.customer.user.email} phoneNum = {this.state.result.customer.phoneNum} onClose={this.onClose}/>
                    </div>
                </div>
            </div>
        )
    }
} 

export default RequestItem