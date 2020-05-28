import React, { Component } from 'react';
import axios from "axios"
class UserListItem extends Component {
    state={
        user: {},
        name:'',
    }



    handleChange = event => {
        this.setState({name:event.target.value})
    }
    // async 
    componentDidMount(){
        axios.get(`/users/${this.props.match.params.userId}`).then((response)=>{
            this.setState({user: response.data})
        })
        .catch((e)=>{
            console.log(e)
        })
        // try{
        //     const {data} = await axios.get(`http://localhost:8000/users/${this.props.match.params.userId}`)
        //     this.setState({user:data})
        // }
        // catch(e){
        //     console.log(e)
        // }
    }

    handleSubmit = async event => {
        event.preventDefault()
        try{
            await axios.patch(`/users/${this.props.match.params.userId}`,{name:this.state.name})
            const {data: user} = await axios.get(`/users/${this.props.match.params.userId}`)
            this.setState({user,name:''})
         }
        catch(e){

        }
    }

    // handleSubmit = event => {
    // event.preventDefault()
    // axios.patch(`http://localhost:8000/users/${this.props.match.params.userId}`,{name:this.state.name})
    // .then((response)=>{
    //     console.log(response.data)
    // })
    // axios.get(`http://localhost:8000/users/${this.props.match.params.userId}`)
    // .then((response)=>{
    //     this.setState({user:response.data});
    // })
    // .catch((e)=>{
    //     console.log(e)
    // })


    // }

 
    // handleSubmit = async event => {
    //     event.preventDefault()
    //     try{
    //         const {data} = axios.patch(`http://localhost:8000/users/${this.props.match.params.userId}`)
    //         const {data:user} = axios.get(`http://localhost:8000/users/${this.props.match.params.userId}`)
    //         this.setState({user})


    //     }
    //     catch(e){
    //         console.log(e)
    //     }
    //     // axios.patch(`http://localhost:8000/users/${this.props.match.params.userId}`)
    //     // .then((response)=>{
    //     //     this.setState({user:response.data})
    //     // })
    //     // .catch((e)=>{
    //     //     console.log(e)
    //     // })
    // }
    render() {
        console.log("this",this.state)
        // const {user} = this.state
        return (
            <div>
                <h1><strong> name:</strong> {this.state.user.name} </h1>     

                <h1><strong>email: </strong> {this.state.user.email}</h1>
                <h1><strong> id:</strong> {this.state.user.id}</h1>
               
                <input onChange={this.handleChange}
                       value={this.state.name}/>             <button onClick={this.handleSubmit}> submit change </button> 
            </div>
        );
    }
}


export default UserListItem
