import {useState, useRef, useEffect} from 'react';
import TodoListInputComponent from "./TodoListInputComponent";
import TodoListComponent from "./TodoListComponent";

function App() {

  const [todoList, setTodoList] = useState(
    () => JSON.parse(window.localStorage.getItem("todoList")) || []
  );

  const todoIndex = useRef(1);

  useEffect(() => {
    window.localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList]);

  const onSubmit = (e) => {
    e.preventDefault();
    const input = e.target.querySelector("input");

    setTodoList([
      ...todoList
      , {
        index : todoIndex.current++
        ,memo : input.value
        ,isDone : false
      }
    ]);

    input.value = '';
  }

  const checkDone = (e) => {
    e.target.classList.toggle('done');
    const idx = e.target.parentElement.dataset.index;
    setTodoList(
      todoList.map(td =>
        td.index === idx ? {...td, isDone : !td.isDone} : td
      )
    )
  }

  const deleteTodo = (index) => {
    setTodoList(todoList.filter( item => item.index !== index));
  }


  return (
    <div id="containerBox" className="container-box">
      <TodoListInputComponent onSubmit = {onSubmit}/>
      <TodoListComponent todoList={todoList} checkDone={checkDone} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
