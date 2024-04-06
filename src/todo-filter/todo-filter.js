import React from "react";

import './todo-filter.css'

const TodoFilter = () => {
    return (
        <ul className="filters">
            <li>
                <button className="selected">All</button>
            </li>
            <li>
              <button>Active</button>
            </li>
            <li>
              <button>Completed</button>
            </li>
        </ul>
    )
}

export default TodoFilter;