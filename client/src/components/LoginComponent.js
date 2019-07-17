import React,{ Component } from "react";
import axios from 'axios';
import deviceStorage from "../services/deviceStorage";


class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
        this.login = this.login.bind(this)
    }

    login(email,password){
        axios.post("http://localhost:3001/auth/login",{
            user: {
              email: email,
              password: password
            }
          },)
          .then((response) => {
              console.log(response);
          })
          .catch((error) => {
            console.log(error)
          });
    }


    render() {
        return (
           <div>
               <form>
               <div>
               <label> email :</label>
               <input ref={(c) => this.email = c} type="text" placeholder="email"/> 
               </div>             
               <div>
               <label> mot de passe :</label>
               <input ref={(c) => this.password = c} type="password" placeholder="Mot de passe"/>
               </div> 
               <button onClick={() => this.login()}>Se connecter</button>     
               </form>       
           </div>
            
        )
    }
}

export default LoginComponent;