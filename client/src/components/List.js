import React from 'react';
import articleimage from '../articleimage.png';

const List = ({list, showById=f=>f,editingArticle=f=>f}) =>
    <div className="single-list" key={list.id}>
    <img className="articleimage" src={articleimage} alt="Logo" />
        <h4>{list.title}</h4>
        <p>{list.content}</p>
        <button onClick={() => showById(list.id)}>Voir plus</button>
        <button onClick={() => editingArticle(list.id)}>Editer</button>
    </div>
export default List;