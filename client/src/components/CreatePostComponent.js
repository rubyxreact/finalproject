import React,{ Component } from "react";
import axios from 'axios';
import NewPostForm from './NewPostForm';


var config = {
    headers: {'Authorization': "Bearer " + localStorage.getItem("token")}
};


class CreatePostComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: [],
            categories:[]
        }
        this.addNewPost = this.addNewPost.bind(this)
    }


    addNewPost(title, content, author, category_id) {
        axios.post( 'http://localhost:3001/posts', {title, content, author, category_id},config)
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
                 <NewPostForm onNewList={this.addNewPost} categories={this.getCategories} stateCategories={this.state.categories} />
            </div>
            
        )
    }
}

export default CreatePostComponent;