import React from "react";
import ReactDOM from 'react-dom';
import Header from "./header/header";
import TodoList from "./todo-list/todo-list";
import Footer from "./footer/footer";

import './index.css';

function App() {

  const todoData = [
    {label: 'Completed task', classic: 'completed',time:123,id:1},
    {label: 'Editing task', classic: 'editing',time:123,id:2},
    {label: 'Active task', classic: 'view',time:123,id:3}
  ]

  return (
    <section className="todoapp">
      <Header/>
      <section className="main">
        <TodoList todos={todoData}/>
        <Footer />
      </section>
    </section>
  );
}

ReactDOM.render(<App/>,document.getElementById('root'));
