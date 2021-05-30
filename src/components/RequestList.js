import React, { useEffect, useState } from 'react'
import RequestItem from './RequestItem/RequestItem'
import axios from 'axios'


const RequestList = () => {
    const [requests, updateRequests] = useState([])
    const [flag, setFlag] = useState(false)
    
    useEffect(()=>{
        const func = async() => {
            try{
                const response = await axios.get('http://172.31.35.88:8000/shop/list/')
                let temp = []
                for (let i in response.data){
                    temp.push(response.data[i])
                }
                updateRequests(temp)
            }
            catch(err){
                console.log(err)
            }
        }
        func()
    },[flag])

    const RenderedList = requests.map((request, index) => {
        const userName = `${request.customer.user.first_name} ${request.customer.user.last_name}`
        return(
            <RequestItem key={index} setFlag={setFlag} flag={flag} requestId={request.id} userName={userName} medName={request.medName.name} medQnty={request.medQnty} orderDate={request.date_created} orderTime={request.time_created} />
        )
    })

    return(
        <div>
            {requests.length === 0? <p style={{'textAlign': 'center'}}>No Pending Requests</p> : RenderedList}
            {requests.length === 0? console.log('nothing yet'): console.log('received')}
        </div>
    )
} 

export default RequestList