import React from "react";
import "./Login.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.jpg";

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="login">
            <div className="container">
                <div className="form-container">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="form-title">Login</h1>
                            <input
                                type="email"
                                placeholder="email"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <input type="password" placeholder="password" {...register("password", {})} />

                            <input type="submit" value="Login" />
                        </form>
                        <p>
                            Don’t have an account yet? <Link to="/register">register</Link>
                        </p>
                    </div>
                </div>
                <div className="login-img">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;
