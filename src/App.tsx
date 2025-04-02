import HomePage from "./pages/HomePage";
import TodosPage from "./pages/TodosPage";
import UserPage from "./pages/UserPage";
import UsersPage from "./pages/UsersPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";

const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/users" element={<UsersPage />} />
                <Route path="/users/:id" element={<UserPage />} />
                <Route path="/todos" element={<TodosPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;