import { FunctionComponent } from "react";
import { IUser } from "../types/types";
import { Link } from "react-router-dom";

interface IUserItem {
    user: IUser;
}

const UserItem: FunctionComponent<IUserItem> = ({ user }) => {
    return (
        <Link to={`/users/${user.id}`}>
            <div style={{ padding: '.5em', borderRadius: '.3em', backgroundColor: '#edfffe' }}>
                <h3>{user.id}. {user.name}</h3>
                <p>{user.email}</p>
                <p>{user.address.zipcode}, {user.address.city}, {user.address.street}</p>
            </div>
        </Link>
    );
}

export default UserItem;