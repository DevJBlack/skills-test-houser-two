import React, { Component } from 'react'
import './House.css'

class House extends Component {
  constructor(props){
    super(props)
    this.state = ({

    })
  }

  render(){
    const { house } = this.props
    return(
      <div className="container">
        <ul className="move-lines">
          <li> <p>Property Name: {house.name}</p> </li> 
          <li> <p>Address: {house.address}</p> </li> 
          <li> <p>City: {house.city}</p> </li> 
          <li> <p>State: {house.state}</p> </li> 
          <li> <p>Zip: {house.zip}</p> </li>        
          <button onClick={() => this.props.deleteHouse(house.house_id)}>Delete</button>
        </ul> 
      </div>
    )
  }
}

export default House