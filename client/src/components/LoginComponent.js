import React,{ Component } from "react";
import axios from 'axios';
import deviceStorage from "../services/deviceStorage";


class LoginComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: [],
            jwt: '',
        }
        this.login = this.login.bind(this)
        this.newJWT = this.newJWT.bind(this);
    }

  
    newJWT(jwt){
        this.setState({
          jwt: jwt
        });
    }

    login(){
        var email = this.email;
        var password = this.password;
        axios.post("http://localhost:3001/auth/login",{
            user: {
              email: email,
              password: password
            }
          },)
          .then((response) => {
              console.log(response);
            deviceStorage.saveKey("id_token", response.data.jwt);
            this.props.newJWT(response.data.jwt);
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