import React from 'react'
import { TodoItem } from './TodoItem';

function TodoList(props) {
    return (
        <section>
            <ul>
                <li>
                    {props.children}
                </li>
            </ul>
        </section>
    );
};

export { TodoList };