import React,{ Component } from "react";
import axios from 'axios';
import List from "./List";
import articleimage from '../articleimage.png';
import EditListForm from "./EditLIstForm";


var config = {
    headers: {'Authorization': "Bearer " + localStorage.getItem("token")}
};

class PostByCategoryComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            lists: []
        }
    }
    
    componentDidMount() {
        const { id } = this.props.match.params
        console.log(id);

        axios.get(`http://localhost:3001/categories/${id}/posts`,config)
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
            <div className="List-container">
            <h1> Voici la liste des articles : </h1>
                {this.state.lists.map( (list) => { 

                    return (
                        <List list={list} key={list.id} showById={this.showPost} editingArticle={this.editingList} />
                    )
                
                })}
            </div>

            
        )
    }
}

export default PostByCategoryComponent;



  

  
    