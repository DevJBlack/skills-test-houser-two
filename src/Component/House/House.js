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
          <div> <p>Property Name: {house.name}</p> </div> 
          <div> <p>Address: {house.address}</p> </div> 
          <div> <p>City: {house.city}</p> </div> 
          <div> <p>State: {house.state}</p> </div> 
          <div> <p>Zip: {house.zip}</p> </div>        
          <button onClick={() => this.props.deleteHouse(house.house_id)}>Delete</button>
        </ul> 
      </div>
    )
  }
}

export default House