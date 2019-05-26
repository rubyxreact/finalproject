import React from 'react';

const NewPostForm = ({onNewList = f => f}) => {
    let title
    const submit = e => {
        e.preventDefault()
        onNewList(title.value)
        title.value = ''
        title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Title..." required />
            <button>Ajouter un article</button>
        </form>
    )
}

export default NewPostForm;