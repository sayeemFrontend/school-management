import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "../components/common/navbar";
import Login from "../pages/login";
import Register from "../pages/register";

export default function Layout() {
  const [user, setUser] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) setUser(true);
  }, []);
  return (
    <div className="bg-secondary">
      <div className="mb-10 ">
        <Navbar sticky height="70px" />
      </div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
}
