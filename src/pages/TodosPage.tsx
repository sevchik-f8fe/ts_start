import { FunctionComponent, useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";
import { ITodo } from "../types/types";
import TodoItem from "../components/TodoItem";
const TodosPage: FunctionComponent = () => {
    const [todos, setTodos] = useState<ITodo[]>([])

    useEffect(() => {
        fetchTodos();
    }, []);

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');

            setTodos(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <List items={todos} renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} />
        </>
    );
}

export default TodosPage;