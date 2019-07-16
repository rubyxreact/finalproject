import React, { Component } from 'react';

class EditListForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.list[this.props.articleId].id,
            title: this.props.list[this.props.articleId].title,
            content: this.props.list[this.props.articleId].content
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, title, content } = this.state;
        this.props.editList(id, title, content);
    }
    render(){
        return( 
        <div className="form-style-5" >
        <form onSubmit={this.handleSubmit}>
        <fieldset>
        <legend> Modifier un article</legend>
        <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <textarea type="text" value={this.state.content}
                    onChange={this.handleChange} placeholder="Contenu..." required ></textarea>
        </fieldset>
            <button>Mettre à jour</button>
        </form>
        </div>
        )
    }
}
export default EditListForm;