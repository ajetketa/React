import React from 'react';
import TodoAdd from '../TodoAdd/todoAdd';
import TodoItem from '../TodoItem/TodoItem';

function TodoApp() {

  let todoItems = [
    { title: "Work", deadline: new Date()},
    { title: "Work", deadline: new Date()},
    { title: "Work", deadline: new Date()},
    { title: "Work", deadline: new Date()},
    { title: "Work", deadline: new Date()},
    { title: "Work", deadline: new Date()}
  ];

  let todoItemsRows = []

  for (let todoItem of todoItems) {
    todoItemsRows.push(<TodoItem item={todoItem} />)
  }

  return(
    <div className="bg-lightBeige w-screen h-screen flex flex-col items-center pt-10">
      <div className="m-6">
        <h1 className="text-5xl text-darkNavy">To Do App</h1>
      </div>
      <TodoAdd></TodoAdd>
      {todoItemsRows}
    </div>
  )
}

export default TodoApp;