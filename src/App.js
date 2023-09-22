import React, { Component } from 'react';
import logo from './imagenes/Logo_Udgvirtual.jpeg';
import './App.css';

import todos from './todos.json';

import TodoForm from './components/TodoForm';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: ['todos']
      
    }
    this.handleAddTodo = this.handleAddTodo.bind(this);
  }

  removeTodo(index) {
    this.setState({
      todos: this.state.todos.filter((e, i) => {
        return i !== index
      })
    });
  }

  handleAddTodo(todo) {
    this.setState({
      todos: [...this.state.todos, todo]
    })
  }

  render() {
    const todos = this.state.todos.map((todos, i) => {
      return (
        <div className="contenedor-tarea" key={i}>
              <span>
                <div className="tarjetas">
                <ul>
                  <h3>{todos.title}</h3>
                  <li>{todos.priority}</li>
                  <li>{todos.responsible}</li>
                  <li>{todos.description}</li> 
                  <li>{todos.fecha}</li> 
                  <li><button
                className="contenedor-2" onClick={this.removeTodo.bind(this, i)}>
                Borrar
              </button></li>
                </ul>
                </div>
                
              </span>
             
        </div>
      )
    });

    
    return (
      <div className="App">

        <nav className="navbar navbar-dark bg-dark">
          <a className="navbar-brand" href="/">
            Tareas
            <span className="badge badge-pill badge-light ml-2">
              {this.state.todos.length}
            </span>
          </a>
        </nav>

        <div className="container">
          <div className="rowmt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
              <TodoForm onAddTodo={this.handleAddTodo}></TodoForm>
            </div>

            <div className="col-md-8">
              <div className="row">
                {todos}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;