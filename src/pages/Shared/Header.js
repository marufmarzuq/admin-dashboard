import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header>
            <div className="container">
                <div className="logo">
                    <Link to="/">Admin Dashboard</Link>
                </div>
                <div>
                    <Link to="/login">
                        <button className="header-login-btn">Login</button>
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
