import React from "react";
import {TextField, Input, Button} from 'react-aria-components';


function TodoAdd() {

  let [todo, setTodo] = React.useState('');

  return(
    <div className="mt-2 mb-1 flex items-center">
      <div className="m-1 w-72">
        <TextField>
          <Input className="border-lightNavy border-2 p-3 rounded-xl flex justify-center text-darkNavy w-64"/>
        </TextField>
      </div>
      <div className="w-24">
        <Button className="border-darkNavy text-darkNavy rounded-xl border-2 p-3 hover:bg-darkNavy hover:text-lightBeige" onPress={() => alert('Hello world!')}>Press me</Button>
      </div>
    </div>
  )
}

export default TodoAdd;