import React,{ Component } from "react";
import axios from 'axios';
import deviceStorage from "../services/deviceStorage";


class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login(){
        axios.post("http://localhost:3001/auth/login", {
            user: {
              email: this.state.email,
              password: this.state.password
            }
          })
          .then(res => console.log(res.data))
          .catch((error) => {
            console.log(error)
          });
    }


    render() {
        return (
           <div>
               <form onSubmit={this.login}>
               <div>
               <label> email :</label>
               <input type="text" placeholder="email" onChange={e => this.setState({ email: e.target.value })}/>
               </div>             
               <div>
               <label> mot de passe :</label>
               <input type="password" placeholder="Mot de passe" onChange={e => this.setState({password: e.target.value })}/>
               </div> 
               <button>Se connecter</button>     
               </form>       
           </div>
            
        )
    }
}

export default LoginComponent;