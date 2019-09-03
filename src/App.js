import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css';

const todoData = [
  {
    task: 'Clean House',
    id: 143,
    completed: false
  },
  {
    task: 'Walk Dogs',
    id: 127,
    completed: false
  },
  {
    task: 'Cook Dinner',
    id: 21,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      name: 'Lindsey',
      todo: todoData,
    };
  }

  toggleItem = id => {
    console.log(id);
    this.setState({
      todo: this.state.todo.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todo: [...this.state.todo, newItem]
    });
  };

  clearCompleted = () => {
    this.setState({
      todo: this.state.todo.filter(item => !item.completed)
    });
  };

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>{this.state.name}'s To-do List</h1>
          <TodoForm addItem={this.addItem} clearCompleted={this.clearCompleted} />
        </div>
        <TodoList
          todo={this.state.todo}
          toggleItem={this.toggleItem}
          clearCompleted={this.clearCompleted}
        />

        
      </div>
    );
  }
}
export default App;