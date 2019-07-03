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
        
        axios.get('http://localhost:3001/categories')
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
            ruby<span>x</span>react
            </div>
            <div className="menu">
                <ul className="firstmenu">
                    <li><a href="/">Home</a></li>
                    <li> <a href="/">Catégories</a>
                        <ul className="submenu">
                        {this.state.lists.map( list => {
                    return (
                        <li><a href="/" key={list.id}>{list.name}</a></li>
                    )
                })}
                        </ul>     
                    </li>
                    <li><a href="/">Mon compte</a></li>
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