import React from 'react';

const NewPostForm = ({onNewList = f => f}) => {
    let title, content
    const submit = e => {
        e.preventDefault()
        onNewList(title.value, content.value)
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
            <textarea  ref={input => content = input}
                    type="text"
                    placeholder="Contenu..." required ></textarea>
        </fieldset>
            <button>Créer</button>
        </form>
        </div>
    )
}

export default NewPostForm;