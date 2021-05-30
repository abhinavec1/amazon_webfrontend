import React from 'react'
import './Form.css'
import axios from 'axios'

class Form extends React.Component{
    state = {meds:[]}

    addFields = (e) => {
        e.preventDefault()
        this.setState({meds: [...this.state.meds, {name: "", qnty: null}]})
    }

    updateName = (index, e) => {
        this.setState({meds: this.state.meds.map((item, j) => {
            if (j == index){
                const container = {}
                container.name = e.target.value
                container.qnty = item.qnty
                return container
            }
            else{
                return item
            }
        })})
    }

    updateQnty = (index, e) => {
        this.setState({meds: this.state.meds.map((item, j) => {
            if (j == index){
                const container = {}
                container.name = item.name
                container.qnty = e.target.value
                return container
            }
            else{
                return item
            }
        })})
    }

    removeItem = (index, e) => {
        e.preventDefault()
        this.state.meds.splice(index, 1)
        //console.log(this.state.meds)
        this.setState({meds: this.state.meds})
    }

    handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const response = await axios.post('http://13.233.69.75:8000/shop/update-stock/', {
                'meds': this.state.meds, 'owner': this.props.currUser,
            })
            alert(response.data)
        }
        catch(err){
            alert('Unable to update stock')
        }
        console.log(this.state.meds)
    }

    render(){
        //console.log(this.state.meds)
        const RenderedFields = this.state.meds.map((med, index) => {
            return(
                <div class="stock_item">
                    <div class="name-item">
                        <input className="stock_update_input" value={this.state.meds[index].name} type="text" name="MEDNAME" placeholder="Medicine Name" onChange={(e)=>this.updateName(index, e)}/>
                        <input className="stock_update_input" value={this.state.meds[index].qnty} type="text" name="MEDQNTY" placeholder="Quantity" onChange={(e)=>this.updateQnty(index, e)}/>
                        <button class='btn btn-danger' style={{'height': '50px'}}onClick={(e) => this.removeItem(index, e)}>Remove</button>
                    </div>
                </div>
            )
        })

        return(
            <div class="testbox">
            <form className="stock_update_form" onSubmit={(e) => this.handleSubmit(e)}>
            <div class="banner">
                <h1 className="form_Label">Stock Updation Form</h1>
            </div>
            {RenderedFields}
            <button className='btn btn-primary' onClick={(e)=>this.addFields(e)}>Add field</button>
            <div className="btn-block">
                <button className="form_Submit" type="submit">Send Application</button>
            </div>
            </form>
        </div>
        )
    }
}

export default Form