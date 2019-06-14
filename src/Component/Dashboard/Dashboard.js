import React, { Component } from 'react'
import House from '../House/House'
import axios from 'axios';
import './Dashboard.css'
import { Link } from 'react-router-dom'

class Dashboard extends Component {
  constructor(){
    super()
    this.state = ({
      houses: []
    })
  }

  componentDidMount(){
    axios.get('/api/house').then(res => {
      this.setState({
        houses: res.data
      })
    })
  }

  deleteHouse = id => {
    axios.delete(`/api/house/${id}`).then(res => {
      this.setState({
        houses: res.data
      })
    })
  }
  
  

  render(){
    let mappedHouse = this.state.houses.map(house => {
      return (
        <House 
          key={house.house_id}
          house={house}
          deleteHouse={this.deleteHouse}
        />
      )
    })
    return(
      <div className="container">
        <h1>Dashboard</h1>
        <div className="links">
           <Link to="/wizard"><button>Add New Property</button></Link>
        </div>
        {mappedHouse}
      </div>
    )
  }
}

export default Dashboard