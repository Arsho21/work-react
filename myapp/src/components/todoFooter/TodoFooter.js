import React from 'react'

function TodoFooter({todos, onClearCompleted}) {

   const completedSize = todos.filter((todo) => todo.isCompleted).length;
  
  return (
    <div className='spanButton'>
        <span className='completed'>{completedSize}/{todos.length} completed</span>
        <button className='clearCompleted' onClick={onClearCompleted}>Clear completed</button>
    </div>
  )
}

export default TodoFooter