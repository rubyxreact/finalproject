import React from 'react';

const NewPostForm = ({onNewList = f => f}) => {
    let title, content
    const submit = e => {
        e.preventDefault()
        onNewList(title.value, content.value)
        title.value = ''
        content.value = ''
        title.focus()
    }

    return (
        <form onSubmit={submit}>
            <input  ref={input => title = input}
                    type="text"
                    placeholder="Titre..." required />
            <input  ref={input => content = input}
                    type="text"
                    placeholder="Contenu..." required />
            <button>Add Post</button>
        </form>
    )
}

export default NewPostForm;