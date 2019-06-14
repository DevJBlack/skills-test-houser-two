import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Wizard.css'

class Wizard extends Component {
  constructor(props){
    super(props)
    this.state = ({
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0
    })
    this.createHouse = this.createHouse.bind(this)
  }

  handleName(val){
    this.setState({
      name: val
    })
  }
  
  handleAddress(val){
    this.setState({
      address: val
    })
  }
  handleCity(val){
    this.setState({
      city: val
    })
  }
  handleState(val){
    this.setState({
      state: val
    })
  }
  handleZip(val){
    this.setState({
      zip: val
    })
  }

  
  createHouse  () {
    axios.post('/api/house').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }


  render(){
    return(
      <div>
        <h1>Add New Listing</h1>
        <input type="text" placeholder="Name" onChange={(e) => this.handleName(e.target.value)}/>
        <input type="text" placeholder="Address" onChange={(e) => this.handleAddress(e.target.value)}/>
        <input type="text" placeholder="State" onChange={(e) => this.handleState(e.target.value)}/>
        <input type="text" placeholder="City" onChange={(e) => this.handleCity(e.target.value)}/>
        <input type="number" placeholder="Zip" onChange={(e) => this.handleZip(e.target.value)}/>
        <div>
          <div>
            <Link to="/" > <button onClick={this.createHouse}>Complete</button> </Link>
          </div>  
            <Link to="/"><button>cancel</button></Link>
        </div>
      </div>
    )
  }
}

export default Wizard