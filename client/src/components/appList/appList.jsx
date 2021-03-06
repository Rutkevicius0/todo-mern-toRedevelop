import React, { Component } from 'react';
import TodoEl from '../appTodoEl/appTodoEl';
import './style.css';
class AppList extends Component {
  state = {};
  render() {
    const { onDelete, onDoneUndone, onEdit, todos } = this.props;
    return (
      <ul className="todo-list">
        {todos.map((t) => (
          <TodoEl
            onEdit={onEdit}
            onDelete={onDelete}
            onDoneUndone={onDoneUndone}
            singleTodo={t}
            key={t._id}
          ></TodoEl>
        ))}
      </ul>
    );
  }
}

export default AppList;
