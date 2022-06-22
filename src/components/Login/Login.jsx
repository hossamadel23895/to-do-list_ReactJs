import React, { useState } from "react";
import axios from "axios";
import style from "./Login.module.css";
import { useNavigate } from "react-router-dom";

export default function Login(props) {
  let [user, setUser] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();

  function getUser(e) {
    let userCopy = { ...user };
    userCopy[e.target.name] = e.target.value;
    setUser(userCopy);
  }

  async function formSubmit(e) {
    e.preventDefault();
    let { data } = await axios.post(`http://localhost:8000/api/login`, user);
    if (data.data.token.access_token) {
      localStorage.setItem("userToken", data.data.token.access_token);
      window.location.href = "/tasks";
    }
  }

  return (
    <div>
      <div className={style.HomeStyle}>
        <div className="container d-flex justify-content-center align-items-center h-100">
          <form className="w-50" onSubmit={formSubmit}>
            <div className="d-flex justify-content-center text-white">
              <h1>Login Now</h1>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Your Email
              </label>
              <input
                onChange={getUser}
                type="email"
                className="form-control"
                name="email"
              ></input>
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Your Password
              </label>
              <input
                onChange={getUser}
                type="password"
                className="form-control"
                name="password"
              ></input>
            </div>
            <div className="d-flex d-flex justify-content-end">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
