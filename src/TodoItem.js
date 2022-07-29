import React from 'react'

function TodoItem(props) {
    return (
        <li>
            {props.children}
        </li>
    );
};

export { TodoItem } ;