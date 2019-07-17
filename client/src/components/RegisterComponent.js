import React,{ Component } from "react";
import axios from 'axios';
import logo from '../RubyXReact.png';

const marge = {
    marginTop:45
  };

class RegisterComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    register = (e) => {
        e.preventDefault()
        axios.post("http://localhost:3001/auth/register", {
              email: this.state.email,
              password: this.state.password
            
          })
          .then(response => {
            this.props.history.push("/app");
            alert(response.data.message);
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
            <form onSubmit={this.register}>
            <fieldset>
            <legend> Inscription</legend>
            <input type="text" placeholder="email" onChange={e => this.setState({ email: e.target.value })}/>
            <input type="password" placeholder="Mot de passe" onChange={e => this.setState({password: e.target.value })}/>
            </fieldset>
            <button>S'inscrire</button>
            </form> 
            <p> Vous avez déjà un compte? <a href="/login">Connectez-vous ici.</a></p>    
        </div>
       </div>
            
        )
    }
}

export default RegisterComponent;