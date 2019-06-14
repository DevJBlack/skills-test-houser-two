import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './Wizard.css'

class Wizard extends Component {
  constructor(props){
    super(props)
    this.state = ({
      houses: [],
      name: '',
      address: '',
      city: '',
      state: '',
      zip: 0,
      input: ''
    })
    // this.add = this.add.bind(this)
  }

  handleValue = (e) => {
    const { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
;

componentDidMount(){
  axios.get('/api/house').then(res => {
    this.setState({
      houses: res.data
    })
  })
}

 
  
  createHouse(){
    const {input} = this.state
    axios.post('/api/house', {house: input}).then(res => {
      this.setState({
        houses: res.data,
        input: ''
      })
    })
  }


  render(){
    return(
      <div>
        <h1>Add New Listing</h1>
        <input 
          type="text"
          placeholder="Property Name:"
          name='name'
          value={this.state.name}
          onChange={this.handleValue}
        />
        <input 
          type="text"
          placeholder="Address:"
          name='address'
          value={this.state.address}
          onChange={this.handleValue}
        />
        <input 
          type="text"
          placeholder="City:"
          name='city'
          value={this.state.city}
          onChange={this.handleValue}
        />
        <input 
          type="text"
          placeholder="State: "
          name='state'
          value={this.state.state}
          onChange={this.handleValue}
        />
        <input 
          type="text"
          placeholder="Zip:"
          name='zip'
          value={this.state.zip}
          onChange={this.handleValue}
        />
      <div>
        <div>
         <Link to="/" ><button onClick={() => this.createHouse()}>Complete</button> </Link>
        </div>  
          <Link to="/"><button>cancel</button></Link>
      </div>
      </div>
    )
  }
}

export default Wizard