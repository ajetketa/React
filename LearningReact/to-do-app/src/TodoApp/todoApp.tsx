import React from 'react';
import TodoAdd from '../TodoAdd/todoAdd';
import TodoItem from '../TodoItem/TodoItem';

interface TodoItem {
  title : String
}

function TodoApp() {

  let todoItems : TodoItem[] = []

  let todoItemsRows = []

  for (let todoItem of todoItems) {
    todoItemsRows.push(<TodoItem item={todoItem} />)
  }

  const handleAdd = () => {
    
  }

  return(
    <div className="bg-lightBeige w-screen h-screen flex flex-col items-center pt-10">
      <div className="m-6">
        <h1 className="text-5xl text-darkNavy">To Do App</h1>
      </div>
      <TodoAdd handleAdd={handleAdd}></TodoAdd>
      {todoItemsRows}
    </div>
  )
}

export default TodoApp;