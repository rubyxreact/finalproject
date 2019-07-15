import React,{ Component } from "react";
import axios from 'axios';
import List from "./List";


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

    render() {
        if(this.state.toOnePost === true){
            return (   <List list={this.state.article} key={this.state.article.id} showById={this.showPost} />)
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



  

  
    