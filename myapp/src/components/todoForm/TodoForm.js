import React, { useState } from 'react'
import todoimg from './form.png'

function TodoForm({onAdd}) {
    let x = new Date();
    console.log(x.getDay());
    const [text, setText] = useState('')
    let arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <form className='formInput' onSubmit={(e) => {
        e.preventDefault();
        onAdd(text);
        setText('')
    }}>
    <div>
      <img className='todoimg' src={todoimg} alt=''/>
    </div>
    <h1 className='h1'><i>Oh my, it's {arr[x.getDay() - 1]} 💪😀</i></h1>
        <input className='inputtext' type='text' value={text} onChange={(e) => {
            setText(e.target.value);
        }}/>
        <button className='Add'>+</button>
    </form>
  )
}

export default TodoForm