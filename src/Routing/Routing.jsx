import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";

import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Tasks from "../components/Tasks/Tasks";
import Header from "./Header";

export default function Routing() {
  const [userData, setUserData] = useState(null);
  return (
    <>
      <Header />
      <div style={{ paddingTop: "50px" }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tasks" element={<Tasks />} />
        </Routes>
      </div>
    </>
  );
}
