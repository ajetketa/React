import React from 'react';
import deadline from './deadline.png';

interface ItemProps {
  title : String, 
  deadline: Date
}

interface Props {
  item : ItemProps
}

function TodoItem(props : Props) {
  return (
    <div className="border-solid border-2 border-darkBaige rounded-sm m-1 p-2 w-56 md:w-64 lg:w-72 flex justify-center">
      {props.item.title}
      <div className="w-6 h-">
      </div>
    </div>
  )
}

export default TodoItem;