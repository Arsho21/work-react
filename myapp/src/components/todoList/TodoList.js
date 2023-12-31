import React from 'react'
import TodoItem from '../todoItem/TodoItem'

function TodoList({todos, onChange, onDelete}) {
  return (
    <div>
       {
        todos.map((todo) => {
          return(
            <TodoItem key={todo._id} todo={todo}
              onChange={onChange}
              onDelete={onDelete}
            />
          )
        })
       }
    </div>
  )
}

export default TodoList
