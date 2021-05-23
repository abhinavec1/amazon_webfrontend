import React from 'react'
import './Modal.css'

class Modal extends React.Component{
    render(){
		const {isDisplayed, onClose, userName, medName, medQnty, orderTime, orderDate } = this.props
		if (isDisplayed){
			return(
				<div className="modal">
					<div class="inner_description">
						<h1 class="heading">ORDER DETAILS</h1>
						<span class="close" onClick={()=>onClose()}><i class="fas fa-times-circle"></i></span>
						<div class="inner_encloser">
							<div class="modal_item">
								<span class="name inner_item"><i class="fas fa-user"></i> <span>{userName}</span></span>
								<span class="medicine_name inner_item"><i class="fas fa-prescription-bottle-alt"></i> <span>{medName}</span></span>
								<span class="quantity inner_item"><i class="fas fa-cubes"></i> <span>{medQnty}</span></span>
								<span class="date inner_item"><i class="far fa-calendar-alt"></i> <span>{orderDate}</span></span>
								<span class="time inner_item"><i class="fas fa-clock"></i> <span>{orderTime}</span></span>
							</div>	
							<h4 onclick="some()">DESCRIPTION</h4>
							<div class="order_description">
								"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
							</div>
							<br />
							<div class="completed_botton"><button>Completed</button></div>
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