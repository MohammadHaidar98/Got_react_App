import React, { Component } from 'react';
import axios from 'axios';

class About extends Component{
    state={
        users:[]
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res=>{
            this.setState({
                users:res.data
            })
        })
    }
    render(){
        return(
            <div>
            <h1>About page</h1>
            <div>{this.state.users.map(res=><div><h3>{res.name}</h3> and email {res.email} </div> )} </div>
            </div>
    
        )
    }
    
}
export default About;