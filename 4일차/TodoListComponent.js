import TodoListItem from "./TodoListItem"
export default function TodoListComponent({todoList, checkDone, deleteTodo}) {

    return (
        <div id="contents" className="contents">
            <ul id="list">
                {
                    todoList.map(
                        todo => (<TodoListItem key={todo.index} deleteTodo={deleteTodo} checkDone={checkDone} todoList={todo}/>)
                    )
                }
            </ul>
        </div>
    )
}