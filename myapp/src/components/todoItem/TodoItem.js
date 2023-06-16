import React from 'react'


function TodoItem({todo, onChange, onDelete}) {
  return (
    <div className='item'>
        <label>
            <input type='checkbox' checked={todo.isCompleted} onChange={(e) => {
                
                onChange({
                    ...todo,
                    isCompleted: e.target.checked
                })
            }}/>
            {todo.text}
            <button className='delete' onClick={() => {
                onDelete(todo);
            }}>x</button>
        </label>
    </div>
  )
}

export default TodoItem