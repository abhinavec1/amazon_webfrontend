import React from 'react'
import './Modal.css'
import axios from 'axios'

class Modal extends React.Component{

	markComplete = async(requestId, onClose ,flag, setFlag) => {
		console.log(typeof(setFlag))
		const response = await axios.get(`http://172.31.35.88:8000/shop/completereq/${requestId}`)
		alert(response.data)
		setFlag(!flag)
		onClose()
	}

    render(){
		const {isDisplayed, onClose, userName, medName, medQnty, orderTime, orderDate, email, phoneNum, requestId, setFlag, flag} = this.props
		if (isDisplayed){
			return(
				<div className="modal">
					<div class="inner_description">
						<h1 class="heading">ORDER DETAILS</h1>
						<span class="close"  onClick={onClose}><i class="fas fa-times-circle"></i></span>
						<div class="inner_encloser">
							<div class="order_details">
								<div class="special"><i class="fas fa-user"></i>{userName}</div>
								<div class="modal_item_encloser">
									<div class="modal_item"><i class="fas fa-prescription-bottle-alt"></i>{medName}</div>
									<div class="modal_item"><i class="fas fa-cubes"></i>{medQnty}</div>
									<div class="modal_item"><i class="far fa-calendar-alt"></i>{orderDate}</div>
									<div class="modal_item"><i class="fas fa-phone-square"></i>{phoneNum}</div>
									<div class="modal_item"><i class="fas fa-envelope-open"></i>{email}</div>
									<div class="modal_item"><i class="fas fa-clock"></i>{orderTime}</div>
								</div>
								<div class="modal_item_encloser">
									<div class="legend">
										<span><i class="fas fa-prescription-bottle-alt"></i>Medicine</span>
										<span><i class="fas fa-cubes"></i>Quantity</span>
										<span><i class="far fa-calendar-alt"></i>Date</span>
										<span><i class="fas fa-phone-square"></i>Phone</span>
										<span><i class="fas fa-envelope-open"></i>Email</span>
										<span><i class="fas fa-clock"></i>Time</span>
									</div>
								</div>
							</div>
							<div style={{'textAlign': 'center'}}><button class="completed_botton" onClick={() => this.markComplete(requestId, onClose, flag, setFlag)}>Completed</button></div>
						</div>
					</div>
				</div>
			)
		}
		else{
			return(<></>)
		}
    }
}

export default Modal