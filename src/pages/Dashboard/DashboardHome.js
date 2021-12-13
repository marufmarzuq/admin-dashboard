import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const DashboardHome = () => {
    const [admin, setAdmin] = useState();
    const { user } = useAuth();
    useEffect(() => {
        fetch(`https://rocky-dawn-74128.herokuapp.com/users/${user.email}`)
            .then((res) => res.json())
            .then((data) => setAdmin(data.admin));
    }, [user.email]);
    return (
        <div className="container dashboard-home">
            <h1>welcome {user.displayName}</h1>
            {!admin ? (
                <h3>Please Login with Admin Email for access Dashboard</h3>
            ) : (
                <Link to="/dashboard">Go to dashboard</Link>
            )}
        </div>
    );
};

export default DashboardHome;
