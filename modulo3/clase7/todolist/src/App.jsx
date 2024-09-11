import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// Esto previene la recarga de la página dentro de un form al hacer submit
// e.preventDefault()

// Desafío
// Reescribir esto por MI CUENTA Y practicar.
/**
 * Agregar la función que elimine una tarea
 * Agregar un id dinámicamente que no se repita
 * Hacer que el check pueda marcar como finalizada la tarea
 */
function App() {
  const [todoName, setTodoName] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (todoName === "") {
      return;
    }

    const newTodo = {
      id: 1,
      title: todoName,
    };

    setTodos([...todos, newTodo]);

    setTodoName("");
  };

  const onChange = (event) => {
    setTodoName(event.target.value);
  };

  return (
    <>
      <ul>
        {todos.map((item) => {
          return (
            <li key={item.id}>
              <label>
                <input type='checkbox' data-list-item-checkbox />
                <span data-list-item-text>{item.title}</span>
                <button>Eliminar</button>
              </label>
            </li>
          );
        })}
      </ul>

      <div>
        <label htmlFor='todo-input'>Nueva Tarea</label>
        <input
          id='todo-input'
          value={todoName}
          type='text'
          onChange={onChange}
        />
        <button onClick={addTodo}>Agregar tarea</button>
      </div>
    </>
  );
}

export default App;
