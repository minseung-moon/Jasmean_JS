export default function TodoListInputComponent({onSubmit}) {
    return (
        <div className="inputlist">
            <h1>To Do List</h1>
            <h2>아래 입력칸에 오늘 할일을 입력해주세요</h2>
            <form onSubmit={onSubmit} id="listForm">
                <input type="text" placeholder="해야할 일을 입력하세요" />
            </form>
        </div>
    )
}