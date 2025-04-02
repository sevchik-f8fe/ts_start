import axios from "axios";
import { FC, useEffect, useState } from "react";
import List from "../components/List";
import { IUser } from "../types/types";
import UserItem from "../components/UsrItem";

const UsersPage: FC = () => {
    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        fetchUsers();
    }, []);

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>('https://jsonplaceholder.typicode.com/users');

            setUsers(response.data)
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <>
            <List items={users} renderItem={(user: IUser) => <UserItem user={user} key={user.id} />} />
        </>
    );
}

export default UsersPage;