import React,{ Component } from "react";
import axios from 'axios';

class MenuComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    componentDidMount() {

        var config = {
            headers: {'Authorization': "Bearer " + localStorage.getItem("token")}
        };
        
        axios.get('http://localhost:3001/categories',config)
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (

            <header>
            <div className="logo">
            
            <a href="/">ruby<span>x</span>react</a>
            </div>
            <div className="menu">
                <ul className="firstmenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/post">Articles</a></li>
                    <li> <a href="/categories">Catégories</a></li>
                    <li><a href="/">Compte</a></li>
                    <li><a href="/">Déconnexion</a></li>
                </ul>           
            </div>
          </header>
        )
    }
}

export default MenuComponent;

// {this.state.lists.map( list => {
//     return (
//         <div className="single-list" key={list.id}>
//             <h4>{list.title}</h4>
//             <p>{list.content}</p>
//         </div>
//     )
// })}