import { ChangeEvent, FunctionComponent, useState } from "react";
import { ITodo } from "../types/types";

interface ITodoItem {
    todo: ITodo;
}

const TodoItem: FunctionComponent<ITodoItem> = ({ todo }) => {
    const [checked, setChecked] = useState<boolean>(todo.completed);

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setChecked(e.target.checked);
    }

    return (
        <div style={{ border: '1px solid gray', display: 'flex', gap: '.5em', padding: '.5em', borderRadius: '.5em' }}>
            <input onChange={onChangeHandler} type="checkbox" checked={checked} />
            <p>{todo.id}. {todo.title}</p>
        </div>
    );
}

export default TodoItem;