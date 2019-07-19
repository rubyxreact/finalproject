import React, {useEffect, useState} from 'react';
import axios from 'axios';



var config = {
    headers: {'Authorization': "Bearer " + localStorage.getItem("token")}
};

const NewPostForm = ({onNewList = f => f, stateCategories}) => {

    const [categories, setCategories] = useState([]);

    useEffect( () => {
        axios.get('http://localhost:3001/categories',config)
        .then(response => {
            console.log(response)
            setCategories(response.data)
        })
        .catch(error => console.log(error))
    } , [])

    let title, content, author, category_id
    const submit = e => {
        e.preventDefault()
        onNewList(title.value, content.value, author.value, category_id.value)
        title.value = ''
        content.value = ''
        title.focus()
        alert("Vous avez créer un article !")
    }

    return (
        <div className="form-style-5" >
        <form onSubmit={submit}>
        <fieldset>
        <legend> Créer un article</legend>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Titre..." required />
            <input className="hideUser"  ref={input => author = input} defaultValue={localStorage.getItem("email")}/>
            <textarea  ref={input => content = input}
                    type="text"
                    placeholder="Contenu..." required ></textarea>
            <select ref={select => category_id = select} className="selectSize">
            {categories.map( (category) => { 

            return (
                <option  value={category.id}>{category.name}</option>
            )

            })}
            </select>
        </fieldset>
            <button>Créer</button>
        </form>
        </div>
    )
}

export default NewPostForm;