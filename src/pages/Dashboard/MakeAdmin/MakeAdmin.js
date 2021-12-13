import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

const MakeAdmin = () => {
    const [error, setError] = useState("");
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        fetch("http://localhost:5000/users/admin", {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
            .then((res) => res.json())
            .then((result) => {
                if (result.modifiedCount) {
                    alert(`${data.email} added as admin successfully`);
                    setError("");
                    reset();
                } else {
                    setError("User not found in register. Please register first");
                }
            });
    };
    console.log(errors);
    return (
        <div className="container">
            <div className="make-admin">
                <div className="make-admin-container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input
                            type="email"
                            placeholder="Enter a email"
                            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                        />
                        <p style={{ padding: "5px 0", color: "red" }}>{error}</p>
                        <input value="Make Admin" type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default MakeAdmin;
