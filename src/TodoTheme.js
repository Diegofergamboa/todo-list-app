import React from 'react'
import './TodoTheme.sass';

function TodoTheme() {
    return (
        <label className='switch'>
            <input type="checkbox"></input>
            <span className='slider'></span>
        </label>
    );
};

export { TodoTheme } ;