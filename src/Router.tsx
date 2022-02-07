import { Routes, Route } from "react-router-dom";
import Layout from "./Views/Layout/Layout";
import Home from "./Views/Pages/Home";
import Detail from "./Views/Pages/Detail";
import Register from "./Views/Pages/Register";

const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="detail">
          <Route path=":itemIdx" element={<Detail />} />
        </Route>
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  );
};

export default Router;
