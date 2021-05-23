import React from 'react'
import './Form.css'

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

    handleSubmit = (e) => {
        e.preventDefault()
        console.log(this.state.meds)
    }

    render(){
        //console.log(this.state.meds)
        const RenderedFields = this.state.meds.map((med, index) => {
            return(
                <div class="item">
                    <div class="name-item">
                        <input value={this.state.meds[index].name} type="text" name="MEDNAME" placeholder="Medicine Name" onChange={(e)=>this.updateName(index, e)}/>
                        <input value={this.state.meds[index].qnty} type="text" name="MEDQNTY" placeholder="Quantity" onChange={(e)=>this.updateQnty(index, e)}/>
                        <button onClick={(e) => this.removeItem(index, e)}>Remove</button>
                    </div>
                </div>
            )
        })

        return(
            <div class="testbox">
            <form onSubmit={(e) => this.handleSubmit(e)}>
            <div class="banner">
                <h1>Stock Updation Form</h1>
            </div>
            <p>Name</p>
            {RenderedFields}
            <button onClick={(e)=>this.addFields(e)}>Add field</button>
            <div class="btn-block">
                <button type="submit">Send Application</button>
            </div>
            </form>
        </div>
        )
    }
}

export default Form