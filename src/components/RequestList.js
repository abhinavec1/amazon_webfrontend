import React from 'react'
import RequestItem from './RequestItem/RequestItem'


const RequestList = ({requests}) => {
    const RenderedList = requests.map(request => {
        return(
            <RequestItem userName={request.userName} medName={request.medName} medQnty={request.medQnty} orderDate={request.orderDate} orderTime={request.orderTime} />
        )
    })

    return(
        <div>
            {RenderedList}
        </div>
    )
} 

export default RequestList