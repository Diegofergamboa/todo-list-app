import React from 'react'
import { TodoItem } from './TodoItem';

function TodoList(props) {
    return (
        <section>
            <ul>
                <li>
                    <TodoItem text={props.text}/>
                </li>
            </ul>
        </section>
    );
};

export { TodoList };