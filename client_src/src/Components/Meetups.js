import React, {Component} from 'react'
import axios from 'axios'

class Meetups extends Component{
  constructor(){
    super();
    this.state = {
      meetupArr : [],
      error: false
    }
  }

  componentWillMount(){
    console.log("Hello")
    axios({
      method: 'get',
      header: 'application/json',
      url: 'http://localhost:3000/api/meetups'
    })
      .then((response) => {
        console.log(response.data)
        this.setState({
          meetupArr : response.data
        })
      })
      .catch((error) => {
        console.log(error)
        this.setState({
          error: true
        })
      })
  }

  render(){
    try {
      return (
        <div>
          <h1>Meetups</h1>
          {
            this.state.meetupArr.map((meetup) => {
              return (
                <div>
                  <p><strong>{meetup.name}</strong></p>
                  <p>{meetup.city}</p>
                </div>
              )
            })}
        </div>
      )
    }
    catch(error){
      return(
        <h1>Error</h1>
      )
    }
  }
}

export default Meetups;
