import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "./header/header";
import TodoList from "./todo-list/todo-list";
import Footer from "./footer/footer";

import './index.css';

class App extends Component {
  
  state = { todoData: [
    {label: 'Completed task', classic: 'completed',time:123,id:1},
    {label: 'Editing task', classic: 'editing',time:123,id:2},
    {label: 'Active task', classic: 'view',time:123,id:3}
  ]}

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id===id);
      const newArray = [...todoData.slice(0,idx),...todoData.slice(idx+1)];
      return {
        todoData:newArray
      }
    })
  }

  render () {return (
    <section className="todoapp">
      <Header/>
      <section className="main">
        <TodoList todos={this.state.todoData} onDeleted={this.deleteItem}/>
        <Footer />
      </section>
    </section>
  )};
}

ReactDOM.render(<App/>,document.getElementById('root'));
