import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { id: 1, title: 'Task 1' },
        { id: 2, title: 'Task 2' },
        { id: 3, title: 'Task 3' },
        { id: 4, title: 'Task 4' }s
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <div className="upper-bar">
          <button>Create To-Do</button>
        </div>
        <div className="todo-container">
          {this.state.todos.map(todo => (
            <div key={todo.id} className="todo-item">
              {todo.title}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default App;
