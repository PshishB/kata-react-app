import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Header from "./header/header";
import TodoList from "./todo-list/todo-list";
import Footer from "./footer/footer";

import './index.css';

class App extends Component {

  maxId = 100;
  
  state = { 
    todoData: [
      this.createTodoItem('Completed task','completed'),
      this.createTodoItem('Editing task','editing'),
      this.createTodoItem('Active task','view')
  ],
    filter:'all'
  }

  createTodoItem (label,classic = 'view'){
    return {
      label,
      classic,
      time:123,
      completed: classic === 'completed' ? true : false ,
      id:this.maxId++
    }
  }

  toogleProperty (arr, id, propName) {
    const idx = arr.findIndex((el) => el.id===id);
    const oldItem = arr[idx];

    const newItem = {...oldItem, [propName]:!oldItem[propName]};

    return [...arr.slice(0,idx),newItem,...arr.slice(idx+1)];;
  }

  onAddItem = (label) => {
    const newItem = this.createTodoItem(label)

    this.setState(({todoData}) => {
      const newArray = [...todoData,newItem]
      return {
        todoData:newArray
      }
    })
  }

  onFiltterItems = (filterValue) => {
    this.setState ({
      filter:filterValue
    })
  }

  deleteItem = (id) => {
    this.setState(({todoData}) => {
      const idx = todoData.findIndex((el) => el.id===id);
      const newArray = [...todoData.slice(0,idx),...todoData.slice(idx+1)];
      return {
        todoData:newArray
      }
    })
  }

  deleteCompletedItems = () => {
    this.setState (({todoData}) => {
      const newArray = todoData.filter((el) => !el.completed)
      return {
        todoData:newArray
      }
    })
  }

  onToogleCompleted = (id) => {
    this.setState(({todoData}) => {
      return {
        todoData:this.toogleProperty(todoData,id,'completed')
      }
    })
  }


  render() {
    const { todoData, filter } = this.state;
  
    let filteredTodos;
    if (filter === 'active') {
      filteredTodos = todoData.filter(todo => !todo.completed);
    } else if (filter === 'completed') {
      filteredTodos = todoData.filter(todo => todo.completed);
    } else {
      filteredTodos = todoData;
    }
  
    const completedCount = todoData.filter(todo => todo.completed).length;
    const unCompletedCount = todoData.length - completedCount;
  
    return (
      <section className="todoapp">
        <Header onAddItem={this.onAddItem} />
        <section className="main">
          <TodoList
            todos={filteredTodos}
            onDeleted={this.deleteItem}
            onToogleCompleted={this.onToogleCompleted}
          />
          <Footer
            unCompletedCount={unCompletedCount}
            todos={todoData}
            onFiltterItems = {this.onFiltterItems}
            deleteCompletedItems ={this.deleteCompletedItems}
          />
        </section>
      </section>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('root'));
