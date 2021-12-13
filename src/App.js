import { Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Header from "./pages/Shared/Header";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Dashboard />}></Route>
                <Route path="/make-admin" element={<MakeAdmin />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/register" element={<Register />}></Route>
            </Routes>
        </div>
    );
}

export default App;
