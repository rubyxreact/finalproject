import React,{ Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';

class CategoryComponent extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories: []
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
                categories: response.data
            })
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            
            <div className="List-categories">
            <h1> Voici la liste des catégories : </h1>
              {this.state.categories.map( (list) => { 

                   return (
                    <Link to={"/app/post/category/" + list.id}>
                        <div className="single-list" key={list.id}>
                        <img className="articleimage" src="" alt="Logo" />
                            <h4>{list.name}</h4>
                        </div>
                    </Link>
                    )
                
                })}
            </div>
        )
    }
}

export default CategoryComponent;