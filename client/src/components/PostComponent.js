import React,{ Component } from "react";
import axios from 'axios';
import NewPostForm from './NewPostComponent';

class PostComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: []
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

    addNewPost(title, excerpt) {
        axios.post( '/posts', { list: {title} })
        .then(response => {
            console.log(response)
            const lists = [ ...this.state.lists, response.data ]
            this.setState({lists})
        })
        .catch(error => {
            console.log(error)
        })
    }

    render() {
        return (
            <div className="List-container">
              {this.state.lists.map( list => {
                    return (
                        <div className="single-list" key={list.id}>
                            <h4>{list.title}</h4>
                            <p>{list.created_at}</p>
                        </div>
                    )
                })}
                 <NewPostForm onNewList={this.addNewPost} />
            </div>
            
        )
    }
}

export default PostComponent;