import React,{ Component } from "react";
import axios from 'axios';
import articleimage from '../articleimage.png';


class PostComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: [],
            article:[]
        }
        this.addNewPost = this.addNewPost.bind(this)
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

    showMore(id){

        alert(id);
        
    }



    render() {
        if(this.props.location.pathname === "/post/1"){
            return " bien joué mec"
        } else {
            return (
                <div className="List-container">
                <a href="/createPost" className="createPost"> Créer un article</a>
                <h1> Voici la liste des articles : </h1>
                  {this.state.lists.map( list => {
                        return (
                            <div className="single-list" key={list.id}>
                                 <img className="articleimage" src={articleimage} alt="Logo" />
                                <h4>{list.title}</h4>
                                <p>{list.content}</p>
                                <button type="submit" onClick={() => { this.showMore(list.id) }}>Voir plus</button>
                            </div>
                        )
                    })}
                </div>
                
            )
        }
      
    }
}

export default PostComponent;



  

  
    