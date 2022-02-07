import { Routes, Route } from "react-router-dom";
import Layout from "./Views/Layout/Layout";
import Home from "./Views/Pages/Home";
import Detail from "./Views/Pages/Detail";
import Register from "./Views/Pages/Register";
import Login from "./Views/Pages/Login";
import Logout from "./Views/Pages/Logout";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="home" element={<Home />} />
        <Route path="register" element={<Register />} />
        <Route path="detail" element={<Detail />}>
          <Route path=":itemIdx" element={<Detail />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="logout" element={<Logout />} />
        <Route index />
      </Route>
    </Routes>
  );
};

export default Router;
