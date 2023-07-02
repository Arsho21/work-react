import React from 'react'
import TodoList from '../components/todoList/TodoList';
import TodoForm from '../components/todoForm/TodoForm';
import TodoFooter from '../components/todoFooter/TodoFooter';
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';

export default function Main() {

  const [todos, setTodos] = useState([]);
  const [doo, setDoo] = useState(0);

  useEffect(() => {
    axios.get('http://localhost:4000/api/get').then((response) => setTodos(response.data))
  }, [doo]);

  return (
    <div>
      <TodoForm onAdd={(text) => {
        axios.post('http://localhost:4000/api/create', { title: text }).then(() => {
          setDoo(doo + 1)
        });
      }} />
      <TodoList
        todos={todos}
        onChange={(id) => {
          axios.put('http://localhost:4000/api/update/' + id).then((res) => {
            setDoo(doo - 1);
          })
        }}
        onDelete={(id) => {
          axios.delete('http://localhost:4000/api/delete/' + id).then((res) => {
            setDoo(doo - 1)
          })
        }}
      />
      <TodoFooter todos={todos} onClearCompleted={() => {
        setTodos(todos.filter((todo) => !todo.isCompleted));
      }} />
    </div>
  )
}
