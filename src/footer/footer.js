import React from "react";

import TodoFilter from "../todo-filter";
import './footer.css'

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">1 time left</span>
            <TodoFilter/>
            <button className="clear-completed">clear completed</button>
        </footer>
    )
}

export default Footer;