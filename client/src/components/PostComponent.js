import React,{ Component } from "react";
import axios from 'axios';
import List from "./List";
import articleimage from '../articleimage.png';


class PostComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: [],
            article:[],
            toOnePost: false,
        }
        this.addNewPost = this.addNewPost.bind(this)
        this.showPost = this.showPost.bind(this)
        this.removeList = this.removeList.bind(this)
    }
    componentDidMount() {
        
        axios.get('http://localhost:3001/posts')
        .then(response => {
            console.log(response)
            this.setState({
                lists: response.data
            })
        })
        .catch(error => console.log(error))
    }


    addNewPost(title, content) {
        axios.post( 'http://localhost:3001/posts', {title, content})
        .then(response => {
            console.log(response)
            const lists = [ ...this.state.lists, response.data ]
            this.setState({lists})
        })
        .catch(error => {
            console.log(error)
        })
    }

    showPost(id) {
        axios.get( "http://localhost:3001/posts/" + id )
        .then(response => {
            const lists = this.state.lists.filter(
                list => list.id !== id
            )

            this.setState({
                article : response.data,
                toOnePost: true
            })
            
        })
        .catch(error => console.log(error))
    }


    removeList(id) {
        axios.delete( 'http://localhost:3001/posts/' + id )
        .then(response => {
            const lists = this.state.lists.filter(
                list => list.id !== id
            )
            alert("Vous allez supprimer l'article " + id)
            this.setState({
                lists,
                toOnePost: false
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        if(this.state.toOnePost === true){
            return (  
                
                <div className="onearticle" key={this.state.article.id}>
                  <h4>{this.state.article.title}</h4>
                 <button onClick={() => this.removeList(this.state.article.id)} >Supprimer</button>
                 <a href="/post" className="returnButton"> Retour</a>
                <img  src={articleimage} alt="Logo" />
                  
                    <p className="pcontenu">{this.state.article.content}</p>
                    <p>Date : {this.state.article.created_at.substring(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3/$2/$1')}</p>
                    <p>Mis à jour le : {this.state.article.updated_at.substring(0,10).replace(/(\d{4})-(\d{2})-(\d{2})/g, '$3/$2/$1')}</p>
                    <p>Nombre de commentaires : {this.state.article.nb_comments}</p>

                </div>
                )
        } else {
            return (
                <div className="List-container">
                <a href="/createPost" className="createPost"> Créer un article</a>
                <h1> Voici la liste des articles : </h1>
                  {this.state.lists.map( list => {
                        return (
                            <List list={list} key={list.id} showById={this.showPost} />
                        )
                    })}
                </div>
                
            )
        }
      
    }
}

export default PostComponent;



  

  
    