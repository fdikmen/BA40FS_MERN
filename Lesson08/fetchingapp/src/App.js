import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'

export class App extends Component {

  state = {users:[],loading:true,error:null}

  //Created by "cdm" snippet
  componentDidMount() 
  { 
    this.setState({loading:true})
    console.log("PREV STATE:::: ",this.state.users);
    console.log("API RUNNING")
    // CALLING THE API
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => data.json())
      //.then(jsdata => console.log("API DATA:::: ",jsdata))
      .then(jsdata => {
                      this.setState({users:jsdata})
                      this.setState({loading:false})
      return jsdata})
      .catch(err =>{
        console.log("ERROR:::: ",err.message)
        this.setState({error:err.message})
        this.setState({loading:false})
      })
   }
  render() {
    return (
      
    <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Fetching data from an API
      </p>
     {this.state.loading && <h2>Loading...</h2>}
    {this.state.error && <h2>{this.state.error}</h2>}
     <table>
     {this.state.users && this.state.users.map((user) => {
        return (
          <tr key={user.id}>
            <td  style={{border:'1px solid red'}}>{user.id}</td>
            <td  style={{border:'1px solid red'}}>{user.name}</td>
            <td  style={{border:'1px solid red'}}>{user.email}</td>
            <td  style={{border:'1px solid red'}}>{user.phone}</td>
          </tr>
        )
      })
    }
     </table>
      
    </header>
  </div>
    )
  }
}

export default App
