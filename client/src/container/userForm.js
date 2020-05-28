 

import React, { Component } from 'react'
import axios from 'axios'
import ListItems from './ListItems'
import "../App.css"

class UserForm extends Component {

    state = {
        userName:'',
        userEmail:'',
        users:[]
      }

      componentDidMount=()=>{
          this.getUsers()
      }

    onChangeHandler = (event) => {
        this.setState({[event.target.name]:event.target.value})
 
    }

onSubmitHandler = (event) => {
event.preventDefault()
    
axios.post("/users", {userName:this.state.userName,userEmail:this.state.userEmail})
.then((response)=>{
    this.getUsers()
    this.setState({userName:"",userEmail:""})
    
})
.catch((e)=>{
    console.log(e)
})
 }

 

getUsers = () => {
     axios.get('/users')
    .then((response)=>{
        this.setState({
            users: response.data
        }, ()=>{
            console.log(response.data)
        })
    })
    .catch((e)=>{
        console.log(e)
    })
}

deleteUserById = (id) => {
    axios.delete(`/users/${id}`)
    .then((response)=>{
        this.getUsers();
    })
    .catch((e)=>{
        console.log(e)
    })
}


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-12"> 
                    <form> 
                    <div className="class-form"> 
                <h1> simple CRUD API</h1>
                 <input placeholder="name" onChange={this.onChangeHandler} value={this.state.userName} type="text" name="userName"></input>
                  <input placeholder="email" onChange={this.onChangeHandler} value={this.state.userEmail} type="text" name="userEmail"></input>

                 <button className="btn btn-primary submit"onClick={this.onSubmitHandler}>signup</button>

                </div>
                </form>
                <ListItems items={this.state.users} handleDelete={this.deleteUserById}/>
                    </div>
                    </div>
                </div>

               

         );
    }
}


export default UserForm


 