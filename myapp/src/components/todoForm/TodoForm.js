import React, { useState } from 'react'
import todoimg from './form.png'

function TodoForm({onAdd}) {

    const [text, setText] = useState('')
  return (
    <form className='formInput' onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText('')
    }}>
    <div>
      <img className='todoimg' src={todoimg} alt=''/>
    </div>
    <h1 className='h1'><i>Oh my, it's Monday 💪😀</i></h1>
        <input className='inputtext' type='text' value={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
        <button className='Add'>+</button>
    </form>
  )
}

export default TodoForm