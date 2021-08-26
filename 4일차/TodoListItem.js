export default function TodoListItem({todoList, checkDone, deleteTodo}) {
    const {index, memo, isDone} = todoList;
    
    return (
        <li data-index = {index}>
            <div onClick={checkDone} className={isDone ? 'done' : ''}>{memo}</div>
            <button onClick={()=>{deleteTodo(index)}}>삭제</button>
        </li>
    )

}