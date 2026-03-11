import React, { useState } from "react"

function TodoList() {

  const [todos, setTodos] = useState([
    { id: "1", name: "Learn AWS", completed: false },
    { id: "2", name: "Build Todo App", completed: false }
  ])

  const addTodo = () => {

    const newTodo = {
      id: Date.now().toString(),
      name: "New Task",
      completed: false
    }

    setTodos([...todos, newTodo])
  }

  return (
    <div>

      <h2>Todo List</h2>

      <button onClick={addTodo}>
        Add Todo
      </button>

      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>

    </div>
  )
}

export default TodoList