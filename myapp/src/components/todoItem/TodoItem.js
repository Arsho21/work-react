import React from 'react'


function TodoItem({todo, onChange, onDelete}) {
  return (
    <div className='item'>
        <label>
            <input type='checkbox' checked={todo.Completed} onChange={(e) => {
                
                onChange(todo._id)
            }}/>
            {todo.title}
            <button className='delete' onClick={() => {
                onDelete(todo._id);
            }}>x</button>
        </label>
    </div>
  )
}

export default TodoItem