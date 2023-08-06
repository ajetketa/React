import React, { ChangeEvent } from "react";
import {TextField, Input, Button} from 'react-aria-components';

interface TodoItem {
  title : String
}

// function TodoAdd() {

//   let [todo, setTodo] = React.useState('');
  
//   const handleChange = (event : ChangeEvent<HTMLInputElement>) => {
//     setTodo(event.target.value)
//   }

//   const handleAddTodo = () => {
//     let newTodo : TodoItem = {
//       title: todo
//     }

//     handleAdd(newTodo)
//   }

//   return(
//     <div className="mt-2 mb-1 flex items-center">
//       <div className="m-1 w-72">
//         <input className="border-lightNavy border-2 p-3 rounded-xl flex justify-center text-darkNavy w-64" onChange={handleChange}/>
//       </div>
//       <div className="w-24">
//         <Button className="border-darkNavy text-darkNavy rounded-xl border-2 p-3 hover:bg-darkNavy hover:text-lightBeige" onPress={handleAddTodo}>Add To Do</Button>
//       </div>
//     </div>
//   )
// }

class TodoAdd extends React.Component {

  const [todo, setTodo] = useReact<String>('')
  
  handleChange(event : ChangeEvent<HTMLInputElement>) {
    this.setTodo(event.target.value)
  }

  handleAddTodo() {
    let newTodo : TodoItem = {
      title: this.todo
    }

    this.props.handleAdd(newTodo)
  }

  render() {
    return (
      <div className="mt-2 mb-1 flex items-center">
        <div className="m-1 w-72">
          <input className="border-lightNavy border-2 p-3 rounded-xl flex justify-center text-darkNavy w-64" onChange={this.handleChange}/>
        </div>
        <div className="w-24">
          <Button className="border-darkNavy text-darkNavy rounded-xl border-2 p-3 hover:bg-darkNavy hover:text-lightBeige" onPress={this.handleAddTodo}>Add To Do</Button>
        </div>
      </div>
    )
  }
}

export default TodoAdd;