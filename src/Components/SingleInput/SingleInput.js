import React from 'react';

export default (props) => (
    <input 
        type="text"
        value={ props.userInput }
        onChange={ props.handleUserInput } 
    />
);
