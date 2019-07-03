import React,{ Component } from "react";
import axios from 'axios';
import { BrowserRouter, Route, Link } from "react-router-dom";
import PostComponent from "./PostComponent";
import CreatePostComponent from "./CreatePostComponent";

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

            <BrowserRouter>
            <header>
            <div className="logo">
            
            <Link to="/">ruby<span>x</span>react</Link>
            </div>
            <div className="menu">
                <ul className="firstmenu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Articles</a>
                    <ul className="submenu">
                        <li><Link to="/createPost">Créer</Link></li>
                        <li><Link to="/post">Voir</Link></li>
                        </ul> </li>
                    <li> <Link to="/post">Catégories</Link>
                        <ul className="submenu">
                        {this.state.lists.map( list => {
                    return (
                        <li><a href="/" key={list.id}>{list.name}</a></li>
                    )
                })}
                        </ul>     
                    </li>
                    <li><a href="/">Compte</a></li>
                    <li><a href="/">Déconnexion</a></li>
                </ul>           
            </div>
          </header>
          <Route exact path="/createPost" component={CreatePostComponent} />
          <Route exact path="/post" component={PostComponent} />
    </BrowserRouter>
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