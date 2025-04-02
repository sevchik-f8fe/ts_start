import { FunctionComponent, useEffect, useState } from "react";
import { IUser } from "../types/types";
import axios from "axios";
import { useParams } from "react-router-dom";

interface IUserPageParams {
    id?: string;
}

const UserPage: FunctionComponent = () => {
    const [user, setUser] = useState<IUser | null>(null);
    const params = useParams<keyof IUserPageParams>() as IUserPageParams;

    useEffect(() => {
        fetchUser();
    }, []);

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>(`https://jsonplaceholder.typicode.com/users/${params?.id}`);

            setUser(response.data)
        } catch (e) {
            console.log(e);
        }
    }
    return (
        <div>
            {user?.id}. {user?.name}
        </div>
    );
}

export default UserPage;