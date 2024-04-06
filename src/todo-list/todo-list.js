import React from "react";

import TodoListItem from "../todo-list-item/todo-list-item";
import './todo-list.css'

const TodoList = ({ todos }) => {
    
    const elements = todos.map((item) =>{
        const { classic, id,...itemProps} = item;

        return (
            <li key={id} className={classic}>
                <TodoListItem {...itemProps}/>
            </li>
        )
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TodoList;
