import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import img from "../../assets/images/login.jpg";

const Register = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => console.log(data);
    console.log(errors);
    return (
        <div className="register">
            <div className="container">
                <div className="form-container">
                    <div>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="form-title">Register</h1>
                            <input type="text" placeholder="Full Name" {...register("name", { required: true })} />
                            <input
                                type="email"
                                placeholder="Email Address"
                                {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                            />
                            <input type="password" placeholder="Password" {...register("password", {})} />
                            <div className="gender">
                                <span>Gender:</span>
                                <input {...register("geder", { required: true })} id="male" type="radio" value="male" />
                                <label for="male">Male</label>
                                <input
                                    {...register("geder", { required: true })}
                                    id="female"
                                    type="radio"
                                    value="female"
                                />
                                <label for="female">Female</label>
                            </div>
                            <input type="submit" value="Register" />
                        </form>
                        <p>
                            Already have an account? <Link to="/login">login</Link>
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

export default Register;
