import React from 'react';
import articleimage from '../articleimage.png';

const List = ({list, showById=f=>f}) =>
    <div className="single-list" key={list.id}>
    <img className="articleimage" src={articleimage} alt="Logo" />
        <h4>{list.title}</h4>
        <p>{list.excerpt}</p>
        <button onClick={() => showById(list.id)}>Voir plus</button>
    </div>
export default List;