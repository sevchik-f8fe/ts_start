import { FC } from "react";
import { Link } from "react-router-dom";

const HomePage: FC = () => {
    return (
        <>
            <Link to={'/users'}>users</Link>
            <br />
            <Link to={'/todos'}>todos</Link>
        </>
    );
}

export default HomePage;