import React,{ Component } from "react";
import axios from 'axios';
import logo from '../RubyXReact.png';


const marge = {
    marginTop:45
  };

class LoginComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    login = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/auth/login", {
              email: this.state.email,
              password: this.state.password
            
          })
          .then(response => {
            localStorage.setItem("token",response.data.access_token);
            this.props.history.push("/app");

          })
          .catch((error) => {
            console.log(error)
          });
    }




    render() {
        return (
    <div>
            <img className="image-connect" src={logo} alt="Logo" />
        <div className="form-style-5" style={marge} >
            <form onSubmit={this.login}>
            <fieldset>
            <legend> Connexion</legend>
            <input type="text" placeholder="email" onChange={e => this.setState({ email: e.target.value })}/>
            <input type="password" placeholder="Mot de passe" onChange={e => this.setState({password: e.target.value })}/>
            </fieldset>
            <button>Se connecter</button>
            </form>
            <p> Vous n'avez pas de compte? <a href="/register">Inscrivez-vous ici.</a></p>   
        </div>
    </div>    
        )
    }
}

export default LoginComponent;