import React, { useEffect, useState } from "react";
import "./App.scss";
import { Main } from "./components/Main/Main";
import { Header } from "./components/Header/Header";
import { Outlet, Route, Routes, useNavigate } from "react-router-dom";
import { NotFound } from "./components/NotFound/NotFound";
import spinner from "./assets/img/Loader/spinner.gif";

const Basket = React.lazy(() => import("./components/Basket/Basket"));

type PropsType = {
  activeSortMenu: boolean;
  setActiveSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
};

const Parent: React.FC<PropsType> = (props) => {
  return (
    <div
      className="app"
      onClick={() => {
        if (props.activeSortMenu) props.setActiveSortMenu(false);
      }}>
      <Header></Header>
      <React.Suspense
        fallback={
          <div className="spinner__container">
            <img src={spinner} alt="spinner" />
          </div>
        }>
        <Outlet />
      </React.Suspense>
    </div>
  );
};

const App: React.FC<{}> = () => {
  let [activeSortMenu, setActiveSortMenu] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    navigate("/pizza/items");
  }, []);

  return (
    <Routes>
      <Route
        path="pizza/*"
        element={<Parent activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />}>
        <Route
          path="items"
          element={
            <Main activeSortMenu={activeSortMenu} setActiveSortMenu={setActiveSortMenu} />
          }></Route>
        <Route path="basket" element={<Basket />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Route>
    </Routes>
  );
};

export default App;
