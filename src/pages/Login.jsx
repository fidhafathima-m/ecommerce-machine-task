import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/auth/authSlice";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const { loading, error, token } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
    if (token) {
      navigate("/home");
    }
  };

  return (
    <div>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input
          placeholder="Enter your name"
          name="username"
          onChange={handleChange}
        />
        <input
          type="password"
          placeholder="Enter password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit">{loading ? "Logging in..." : "Login"}</button>
      </form>
      {error && <p style={{color: "red"}}>Login failed with error: {error}</p>}
    </div>
  );
};

export default Login;
