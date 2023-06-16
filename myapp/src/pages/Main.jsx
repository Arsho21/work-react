import React from 'react'
import TodoList from '../components/todoList/TodoList';
import TodoForm from '../components/todoForm/TodoForm';
import TodoFooter from '../components/todoFooter/TodoFooter';
import { useState } from 'react';

export default function Main() {

    const [todos, setTodos] = useState([])
  return (
    <div>
         <TodoForm  onAdd={(text) => {
        setTodos([
          ...todos,
          {
            id: Math.random(),
            text: text,
            isCompleted: false
          }
        ])
      }}/>
      <TodoList 
        todos={todos}
        onChange={(newTodo) => {
          setTodos(todos.map((todo) => {
            if(todo.id === newTodo.id){
              return newTodo
            }
            return todo
          }))
        }}
        onDelete={(todo) => {
            setTodos(todos.filter((t) => t.id !== todo.id));
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
      setTodos(todos.filter((todo) => !todo.isCompleted));
      }}/>
    </div>
  )
}
