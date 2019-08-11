import React from 'react';

const Sources = ({sources, setOutlet, setQuery, onFormSubmit}) =>
    <div>
        <h1>Choose source:</h1>
        <select onChange={ e => setOutlet(e.target.value)}>
            {sources.map(source => (
                <option value={source.id}>{source.name}</option>
            ))}
        </select>
        <h1>Choose search query:</h1>
        <input onChange={ e => setQuery(e.target.value)}></input>
        <button onClick={ e => onFormSubmit()}>Get News</button>
    </div>

export default Sources;
