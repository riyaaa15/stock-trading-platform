import React, { useState } from "react";
import "./Login.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
  });
  const { username, email, password } = inputValue;

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const res = await axios.post("http://localhost:3002/signup", inputValue);
        localStorage.setItem("token", res.data.token);
        navigate("/");
      } catch (err) {
        console.log(err);
        alert(err.response?.data?.message || "Something went wrong");
      }
    };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h2>Signup</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            placeholder="Enter your username"
            onChange={handleOnChange}
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={handleOnChange}
          />

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            onChange={handleOnChange}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
